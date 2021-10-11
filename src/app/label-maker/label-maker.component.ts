import { Component, Injectable } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { LabelDatabaseService } from '../service/label-database.service';

// export class LabelListNode {
//   item: string;
//   level: number;
//   expandable: boolean;
//   constructor() { }
// }

export class LabelListNode {
  labelCode: number;
  labelParent: number;
  labelDesc: string;
  labelName: string;
  expandable: boolean;
  level: number;
  labelSortOrder: number;

  childList: LabelListNode[];
}

@Component({
  selector: 'app-label-maker',
  templateUrl: './label-maker.component.html',
  styleUrls: ['./label-maker.component.css']
})
export class LabelMakerComponent {
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<LabelListNode, LabelListNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<LabelListNode, LabelListNode>();

  /** A selected parent node to be inserted */
  selectedParent: LabelListNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<LabelListNode>;

  treeFlattener: MatTreeFlattener<LabelListNode, LabelListNode>;

  dataSource: MatTreeFlatDataSource<LabelListNode, LabelListNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<LabelListNode>(true /* multiple */);

  constructor(private _database: LabelDatabaseService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<LabelListNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
      
    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
      console.log('data', data);
    });
    console.log('dataSource', this.dataSource);
  }

  getLevel = (node: LabelListNode) => node.level;

  isExpandable = (node: LabelListNode) => node.expandable;

  getChildren = (node: LabelListNode): LabelListNode[] => node.childList;

  hasChild = (_: number, _nodeData: LabelListNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: LabelListNode) => _nodeData.labelName === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: LabelListNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.labelName === node.labelName
        ? existingNode
        : new LabelListNode();
    flatNode.labelName = node.labelName;
    flatNode.level = level;
    flatNode.expandable = !!node.childList?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: LabelListNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: LabelListNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: LabelListNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: LabelListNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: LabelListNode): void {
    let parent: LabelListNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: LabelListNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: LabelListNode): LabelListNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: LabelListNode) {
    const parentNode = this.flatNodeMap.get(node);
    this._database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  /** Save the node to database */
  saveNode(node: LabelListNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this._database.updateItem(nestedNode!, itemValue);
  }

}

