import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LabelListNode } from '../label-maker/label-maker.component';


const TREE_DATA = {
  Groceries: {
    'Almond Meal flour': null,
    'Organic eggs': null,
    'Protein Powder': null,
    Fruits: {
      Apple: null,
      Berries: ['Blueberry', 'Raspberry'],
      Orange: null
    }
  },
  Reminders: [
    'Cook dinner',
    'Read the Material Design spec',
    'Upgrade Application to Angular'
  ]
};

const LabellabelData = [
  {
    labelCode: 7269,
    labelParent: 0,
    labelDesc: "Access & Master",
    labelName: "Access & Master",
    labelUrl: "",
    labelSortOrder: 1,
    labelShortCutKey: null,
    labelRoute: 0,
    h_Level: 0,
    num: 0,


    childList: [
      {
        labelCode: 12,
        labelParent: 7269,
        labelDesc: "Access Control",
        labelName: "Access Control",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 6722,
            labelParent: 12,
            labelDesc: "Access Query",
            labelName: "Access Query",
            labelUrl: "NULL",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6723,
                labelParent: 6722,
                labelDesc: "User Access View",
                labelName: "User Access View",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 6715,
            labelParent: 12,
            labelDesc: "Access Request",
            labelName: "Access Request",
            labelUrl: "NULL",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6718,
                labelParent: 6715,
                labelDesc: "Access Delegation",
                labelName: "Delegate Access Request",
                labelSortOrder: 3,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 6716,
                labelParent: 6715,
                labelDesc: "User Access Request",
                labelName: "Access Provision",
                labelSortOrder: 1,
                labelShortCutKey: "NULL",
                labelRoute: 1,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 6731,
            labelParent: 12,
            labelDesc: "Workflow",
            labelName: "Workflow",
            labelUrl: "NULL",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6732,
                labelParent: 6731,
                labelDesc: "WorkBench",
                labelName: "WorkBench",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 6733,
                labelParent: 6731,
                labelDesc: "WorkFlow Path View",
                labelName: "WorkFlow Path View",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 7214,
                labelParent: 6731,
                labelDesc: "Workflow Personalisation",
                labelName: "Workflow Personalisation",
                labelSortOrder: 4,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 4564,
                labelParent: 6731,
                labelDesc: "Workflow Progress Report",
                labelName: "Workflow Progress Report",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          }
        ]
      },
      {
        labelCode: 6737,
        labelParent: 7269,
        labelDesc: "Masters",
        labelName: "Masters",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 6792,
            labelParent: 6737,
            labelDesc: "Job",
            labelName: "Job",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6797,
                labelParent: 6792,
                labelDesc: "Job Registration",
                labelName: "Job Registration",
                labelSortOrder: 2,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    labelCode: 7270,
    labelParent: 0,
    labelDesc: "Asset Mgmt",
    labelName: "Asset Mgmt",
    labelUrl: "",
    labelSortOrder: 2,
    labelShortCutKey: null,
    labelRoute: 0,
    h_Level: 0,
    num: 0,


    childList: [
      {
        labelCode: 3,
        labelParent: 7270,
        labelDesc: "Asset Mgmt.",
        labelName: "Asset Mgmt.",
        labelUrl: "",
        labelSortOrder: 0,
        labelShortCutKey: null,
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 6934,
            labelParent: 3,
            labelDesc: "AMS - Document",
            labelName: "AMS - Document",
            labelUrl: "",
            labelSortOrder: 0,
            labelShortCutKey: null,
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6939,
                labelParent: 6934,
                labelDesc: "Employee Facilities",
                labelName: "Employee Facilities",
                labelUrl: "NULL",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: [
                  {
                    labelCode: 1556,
                    labelParent: 6939,
                    labelDesc: "Company Owned Car Scheme Request (Creation)",
                    labelName: "Company Owned Car Scheme Request (Creation)",
                    labelSortOrder: 0,
                    labelShortCutKey: null,
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2542,
                    labelParent: 6939,
                    labelDesc: "IT Asset Request ( Creation )",
                    labelName: "IT Asset Request ( Creation )",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2546,
                    labelParent: 6939,
                    labelDesc: "IT Asset Request (Acknowledge)",
                    labelName: "IT Asset Request (Acknowledge)",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  }
                ]
              }
            ]
          },
          {
            labelCode: 6936,
            labelParent: 3,
            labelDesc: "AMS - Query",
            labelName: "AMS - Query",
            labelUrl: "NULL",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6954,
                labelParent: 6936,
                labelDesc: "Common",
                labelName: "Common",
                labelUrl: "NULL",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: [
                  {
                    labelCode: 4080,
                    labelParent: 6954,
                    labelDesc: "P&M Availability Status (View)",
                    labelName: "P&M Availability Status (View)",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  }
                ]
              },
              {
                labelCode: 6955,
                labelParent: 6936,
                labelDesc: "Employee Facilities",
                labelName: "Employee Facilities",
                labelUrl: "NULL",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: [
                  {
                    labelCode: 5962,
                    labelParent: 6955,
                    labelDesc: "COCS Request ( View )",
                    labelName: "COCS Request ( View )",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2543,
                    labelParent: 6955,
                    labelDesc: "IT Asset Request ( View )",
                    labelName: "IT Asset Request ( View )",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  }
                ]
              }
            ]
          },
          {
            labelCode: 6932,
            labelParent: 3,
            labelDesc: "AMS Dashboard",
            labelName: "AMS Dashboard",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6015,
                labelParent: 6932,
                labelDesc: "IOT",
                labelName: "IOT",
                labelSortOrder: 0,
                labelShortCutKey: null,
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    labelCode: 7271,
    labelParent: 0,
    labelDesc: "Business Apps",
    labelName: "Business Apps",
    labelUrl: "",
    labelSortOrder: 3,
    labelShortCutKey: null,
    labelRoute: 0,
    h_Level: 0,
    num: 0,


    childList: [
      {
        labelCode: 7241,
        labelParent: 7271,
        labelDesc: "Digital Apps",
        labelName: "Digital Apps",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 6373,
            labelParent: 7241,
            labelDesc: "Boulder To Concrete(B2C)",
            labelName: "Boulder To Concrete(B2C)",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 6873,
            labelParent: 7241,
            labelDesc: "Digital FNA",
            labelName: "Digital FNA",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 6039,
            labelParent: 7241,
            labelDesc: "ProCube",
            labelName: "ProCube",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      },
      {
        labelCode: 57,
        labelParent: 7271,
        labelDesc: "Partner Portal",
        labelName: "Partner Portal",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 7204,
            labelParent: 57,
            labelDesc: "Partner WorkBench",
            labelName: "Partner WorkBench",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      },
      {
        labelCode: 27,
        labelParent: 7271,
        labelDesc: "Visa Pro+",
        labelName: "Visa Pro+",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 4171,
            labelParent: 27,
            labelDesc: " Passport  Profile",
            labelName: " Passport  Profile",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4164,
            labelParent: 27,
            labelDesc: "Family Arrival",
            labelName: "Family Arrival",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4178,
            labelParent: 27,
            labelDesc: "General Masters",
            labelName: "General Masters",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4172,
            labelParent: 27,
            labelDesc: "Passport Profile for Others",
            labelName: "Passport Profile for Others",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4163,
            labelParent: 27,
            labelDesc: "Passport Tracking",
            labelName: "Passport Tracking",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4165,
            labelParent: 27,
            labelDesc: "Renewal Update",
            labelName: "Renewal Update",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4162,
            labelParent: 27,
            labelDesc: "Upload Documents",
            labelName: "Upload Documents",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4170,
            labelParent: 27,
            labelDesc: "View Documents",
            labelName: "View Documents",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4161,
            labelParent: 27,
            labelDesc: "Visa Cancellation",
            labelName: "Visa Cancellation",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4174,
            labelParent: 27,
            labelDesc: "Visa Request Approval",
            labelName: "Visa Request Approval",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4173,
            labelParent: 27,
            labelDesc: "Visa Request Creation",
            labelName: "Visa Request Creation",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4150,
            labelParent: 27,
            labelDesc: "Visapro Admin Masters",
            labelName: "Visapro Admin Masters",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FVPP%2FCommonGetSession.aspx%3FstrPage%3DVprePages%2FVpreAdmin%2FVpreOperatingOfficePsnoLink.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4380,
            labelParent: 27,
            labelDesc: "Visapro Common Masters",
            labelName: "Visapro Common Masters",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FVPP%2FCommonGetSession.aspx%3FstrPage%3DVprePages%2FVpreMasters%2FVpreMastersCommonToOo.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 3654,
            labelParent: 27,
            labelDesc: "VisaProPlus Dashboard",
            labelName: "VisaProPlus Dashboard",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FVPP%2FCommonGetSession.aspx%3FstrPage%3DVprePages%2FVpreStartPage.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      },
      {
        labelCode: 18,
        labelParent: 7271,
        labelDesc: "Workforce Management",
        labelName: "Workforce Management",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 2343,
            labelParent: 18,
            labelDesc: "Workforce Management",
            labelName: "Workforce Management",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FLMSNet%2FCommonGetSession.aspx%3FstrPage%3DLMSPages%2FLMSDashBoard%2FLMSDashboardMain.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      }
    ]
  },
  {
    labelCode: 7272,
    labelParent: 0,
    labelDesc: "ConstZon & Conkart",
    labelName: "ConstZon & Conkart",
    labelUrl: "",
    labelSortOrder: 4,
    labelShortCutKey: null,
    labelRoute: 0,
    h_Level: 0,
    num: 0,


    childList: [
      {
        labelCode: 6853,
        labelParent: 7272,
        labelDesc: "Conkart",
        labelName: "Conkart",
        labelUrl: "NULL",
        labelSortOrder: 1,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 6855,
            labelParent: 6853,
            labelDesc: "Conkart View",
            labelName: "Conkart View",
            labelUrl: "EIPCKT/conkart/product",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 6854,
            labelParent: 6853,
            labelDesc: "Rate Contract Visibility",
            labelName: "Rate Contract Visibility",
            labelUrl: "EIPCKT/conkart/rcv",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      }
    ]
  },
  {
    labelCode: 7274,
    labelParent: 0,
    labelDesc: "Employee Apps",
    labelName: "Employee Apps",
    labelUrl: "",
    labelSortOrder: 6,
    labelShortCutKey: null,
    labelRoute: 0,
    h_Level: 0,
    num: 0,


    childList: [
      {
        labelCode: 19,
        labelParent: 7274,
        labelDesc: "EIP Connect",
        labelName: "EIP Connect",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 6862,
            labelParent: 19,
            labelDesc: "BIS Claims",
            labelName: "BIS Claims",
            labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FBIS%2FHRMBISLanding.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 1568,
            labelParent: 19,
            labelDesc: "Connect",
            labelName: "Connect",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FEIPConnect%2FCommonGetSession.aspx%3FstrPage%3DPages%2FEIPConnectTreeView.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 6880,
            labelParent: 19,
            labelDesc: "HR Edit",
            labelName: "HR Edit",
            labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FSF%2FChanges_Landing.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 6908,
            labelParent: 19,
            labelDesc: "SF Interface",
            labelName: "SF Interface",
            labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FSF%2FSF_Interface.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 6909,
            labelParent: 19,
            labelDesc: "SFI-V-10",
            labelName: "SFI-V-10",
            labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FSF%2FSF_Update_Interface.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      },
      {
        labelCode: 16,
        labelParent: 7274,
        labelDesc: "Human Resource Mgmt",
        labelName: "Human Resource Mgmt",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 7191,
            labelParent: 16,
            labelDesc: "Approvals",
            labelName: "Approvals",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 4037,
                labelParent: 7191,
                labelDesc: "IT Request Approval",
                labelName: "IT Request Approval",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FProfile%2FHRMEDInternetAccessApproval.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 3938,
                labelParent: 7191,
                labelDesc: "Leave Approval",
                labelName: "Leave Approval",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FWorkflow%2FHRMMyWorkFlow.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 7190,
            labelParent: 16,
            labelDesc: "Employee Action",
            labelName: "Employee Action",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 7246,
                labelParent: 7190,
                labelDesc: "Employee Shift Mapping",
                labelName: "Employee Shift Mapping",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FAttn%2FHRMAttnDefValues.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 3941,
                labelParent: 7190,
                labelDesc: "Leave/OD/Attendance",
                labelName: "Leave/OD/Attendance",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FLeave%2FHRMLeaveapplication.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 4014,
                labelParent: 7190,
                labelDesc: "My Profile",
                labelName: "My Profile",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FProfile%2FHRMEDUpdateProfile.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 7187,
            labelParent: 16,
            labelDesc: "HR Action",
            labelName: "HR Action",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6422,
                labelParent: 7187,
                labelDesc: "Enable EIP",
                labelName: "Enable EIP",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FEmployee%2FHRMEIPEnableISHR.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 6982,
                labelParent: 7187,
                labelDesc: "HRM - HD Admin",
                labelName: "HRM - HD Admin",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FEmployee%2FHRMLiveIssuePage.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 7245,
                labelParent: 7187,
                labelDesc: "Shift Master",
                labelName: "Shift Master",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FAttn%2FHRMAttnShiftMaster.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 7216,
            labelParent: 16,
            labelDesc: "HR Manuals",
            labelName: "HR Manuals",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6304,
                labelParent: 7216,
                labelDesc: "Employee Eligibility Overview",
                labelName: "Employee Eligibility Overview",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FEEO%2FHRMEEOMainPage.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 4522,
                labelParent: 7216,
                labelDesc: "Employee Handbook",
                labelName: "Employee Handbook",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FHRDocs%2FHRMGCCdocuments.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 6333,
                labelParent: 7216,
                labelDesc: "Information Security Agreement",
                labelName: "Information Security Agreement",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FEmployee%2FHRMITPolicy.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 7193,
            labelParent: 16,
            labelDesc: "IT Admin",
            labelName: "IT Admin",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 4082,
                labelParent: 7193,
                labelDesc: "IT Request Status",
                labelName: "IT Request Status",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FProfile%2FHRMEDInfraAccessView.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 7188,
            labelParent: 16,
            labelDesc: "Reports",
            labelName: "Reports",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6473,
                labelParent: 7188,
                labelDesc: "Mispunch Report",
                labelName: "Mispunch Report",
                labelUrl: "eiproot/sessiontransfer?URL=https:%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FEmployee%2FHRMEIPEnableReport.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          }
        ]
      },
      {
        labelCode: 11,
        labelParent: 7274,
        labelDesc: "Insurance",
        labelName: "Insurance",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 3426,
            labelParent: 11,
            labelDesc: "COCS - Vehicle Details",
            labelName: "COCS - Vehicle Details",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FInsuranceNet%2FCommonGetSession.aspx%3FstrPage%3DINSPolMgmt%2FInsCOCSCARDetails.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 6988,
            labelParent: 11,
            labelDesc: "Mediclaim",
            labelName: "Mediclaim",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FInsuranceNew%2FCommonGetSession.aspx%3FstrPage%3DINSMediClaimHome%2FINSMediClaimHomeUI%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 6989,
            labelParent: 11,
            labelDesc: "Overseas Health Insurance",
            labelName: "Overseas Health Insurance",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FInsuranceNew%2FCommonGetSession.aspx%3FstrPage%3DINSHealthInsuranceHome%2FINSHealthInsuranceHomeUI%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 6995,
            labelParent: 11,
            labelDesc: "Retired Mediclaim",
            labelName: "Retired Mediclaim",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FInsuranceNew%2FCommonGetSession.aspx%3FstrPage%3DINSRTMediClaimHome%2FINSRTMediClaimHomeUI%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      },
      {
        labelCode: 15,
        labelParent: 7274,
        labelDesc: "Library Management",
        labelName: "Library Management",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 6025,
            labelParent: 15,
            labelDesc: "Current Awareness Service",
            labelName: "Current Awareness Service",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FLTKS%2FCommonGetSession.aspx%3FstrPage%3DBCSUI\\BCSCreateRequest.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: null,
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 6315,
            labelParent: 15,
            labelDesc: "Web OPAC",
            labelName: "Web OPAC",
            labelUrl: "https://library.lntecc.com/opac/",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      },
      {
        labelCode: 22,
        labelParent: 7274,
        labelDesc: "SSC",
        labelName: "SSC",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 4399,
            labelParent: 22,
            labelDesc: "SSC – i-TEMS",
            labelName: "SSC – i-TEMS",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FCommonGetSession.aspx%3Fstrpage%3DTransferEIPToSSC.aspx%26AppName%3DSALUX%26Module%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 1550,
            labelParent: 22,
            labelDesc: "SSC - Payroll",
            labelName: "SSC - Payroll",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FCommonGetSession.aspx%3Fstrpage%3DTransferEIPToSSC.aspx%26AppName%3DSALUX%26Module%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 1552,
            labelParent: 22,
            labelDesc: "SSC - Travel Expense Mgmt.",
            labelName: "SSC - Travel Expense Mgmt.",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FCommonGetSession.aspx%3Fstrpage%3DTransferEIPToSSC.aspx%26AppName%3DSALUX%26Module%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      },
      {
        labelCode: 6,
        labelParent: 7274,
        labelDesc: "Travels & Admin",
        labelName: "Travels & Admin",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 7121,
            labelParent: 6,
            labelDesc: "Accommodation/Hall Booking Services",
            labelName: "Accommodation/Hall Booking Services",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 2383,
                labelParent: 7121,
                labelDesc: "Hall Booking",
                labelName: "Hall Booking",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FOfficeAdmin%2FCommonGetSession.aspx%3FstrPage%3Ddespatch%2FHBSRequestProcessMgmt.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 2452,
                labelParent: 7121,
                labelDesc: "Hall Request Creation",
                labelName: "Hall Request Creation",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2Fselfservicedesk%2FCommonGetSession.aspx%3FstrPage%3DHBS\\HBSRequestCreation.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 2453,
                labelParent: 7121,
                labelDesc: "Hall Request Status",
                labelName: "Hall Request Status",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2Fselfservicedesk%2FCommonGetSession.aspx%3FstrPage%3DHBS\\HBSRequestStatus.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 2415,
                labelParent: 7121,
                labelDesc: "Masters",
                labelName: "Masters",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FOfficeAdmin%2FCommonGetSession.aspx%3FstrPage%3Ddespatch%2FHBSlabel.asp?strlabel=HM%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 3439,
            labelParent: 6,
            labelDesc: "Approval",
            labelName: "Approval",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravels%2FCommonGetSession.aspx%3FstrPage%3DTTSTravReqProcess.asp%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 7122,
            labelParent: 6,
            labelDesc: "Car Hire Services",
            labelName: "Car Hire Services",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 7475,
                labelParent: 7122,
                labelDesc: "CHR",
                labelName: "CHR",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsNet%2FCommonGetSession.aspx%3FstrPage%3DTravels%2FTTSCarHireRequestListForApproval.asp%26SessionID%3D",
                labelSortOrder: 1,
                labelShortCutKey: null,
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 7227,
                labelParent: 7122,
                labelDesc: "Document",
                labelName: "Document",
                labelUrl: "",
                labelSortOrder: 2,
                labelShortCutKey: null,
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: [
                  {
                    labelCode: 2370,
                    labelParent: 7227,
                    labelDesc: "Booking",
                    labelName: "Booking",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsNet%2FCommonGetSession.aspx%3FstrPage%3DCHS%2FTTSCarHireRequestRegionBooking.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2450,
                    labelParent: 7227,
                    labelDesc: "Car Request Creation",
                    labelName: "Car Request Creation",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2Fselfservicedesk%2FCommonGetSession.aspx%3FstrPage%3DCHS\\CHSTravelRequestForm.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2451,
                    labelParent: 7227,
                    labelDesc: "Car Request Status",
                    labelName: "Car Request Status",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2Fselfservicedesk%2FCommonGetSession.aspx%3FstrPage%3DCHS\\CHSTravelRequestStatus.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2382,
                    labelParent: 7227,
                    labelDesc: "Daily Pooling",
                    labelName: "Daily Pooling",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsNet%2FCommonGetSession.aspx%3FstrPage%3DCHS%2FTTSCarHireDataPooling.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2374,
                    labelParent: 7227,
                    labelDesc: "Invoice Certification",
                    labelName: "Invoice Certification",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsnet%2FCommonGetSession.aspx%3FstrPage%3DTravels%2FTTSInvoiceCertify.asp%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: null,
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2379,
                    labelParent: 7227,
                    labelDesc: "Invoice Entry - Call Sheet",
                    labelName: "Invoice Entry - Call Sheet",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsNet%2FCommonGetSession.aspx%3FstrPage%3DCHS%2FTTSCarHireRequestCallSheetUpdation.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2378,
                    labelParent: 7227,
                    labelDesc: "Invoice Entry - Log Sheet",
                    labelName: "Invoice Entry - Log Sheet",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsNet%2FCommonGetSession.aspx%3FstrPage%3DCHS%2FTTSCarHireLogSheetEntryForCompanyCars.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 3449,
                    labelParent: 7227,
                    labelDesc: "Request Approval",
                    labelName: "Request Approval",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsNet%2FCommonGetSession.aspx%3FstrPage%3DTravels%2FTTSCarHireRequestListForApproval.asp%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: null,
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 3448,
                    labelParent: 7227,
                    labelDesc: "Request Modification",
                    labelName: "Request Modification",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsNet%2FCommonGetSession.aspx%3FstrPage%3DCHS%2FTTSCarHireRequestModify.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 6996,
                    labelParent: 7227,
                    labelDesc: "RTO",
                    labelName: "RTO",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTTSRTO%2FCommonGetSession.aspx%3FstrPage%3DRTODashboard%2FRTODashboard%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  }
                ]
              },
              {
                labelCode: 7225,
                labelParent: 7122,
                labelDesc: "Master",
                labelName: "Master",
                labelUrl: "",
                labelSortOrder: 1,
                labelShortCutKey: null,
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: [
                  {
                    labelCode: 2408,
                    labelParent: 7225,
                    labelDesc: "Car Agent",
                    labelName: "Car Agent",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsnet%2FCommonGetSession.aspx%3FstrPage%3DTravels%2FTTSCarHireAgentMaster.asp%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: null,
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2410,
                    labelParent: 7225,
                    labelDesc: "Car Fare",
                    labelName: "Car Fare",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsnet%2FCommonGetSession.aspx%3FstrPage%3DCHS%2FTTSCarHireRateMaster.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2409,
                    labelParent: 7225,
                    labelDesc: "Car Type",
                    labelName: "Car Type",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsnet%2FCommonGetSession.aspx%3FstrPage%3DTravels%2FTTSCarHireTypeMaster.asp%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: null,
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2412,
                    labelParent: 7225,
                    labelDesc: "Driver",
                    labelName: "Driver",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsNet%2FCommonGetSession.aspx%3FstrPage%3DCHS%2FTTSCarHireDriverMaster.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2411,
                    labelParent: 7225,
                    labelDesc: "Location",
                    labelName: "Location",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsnet%2FCommonGetSession.aspx%3FstrPage%3DTravels%2FTTSCarHireLocationMaster.asp%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: null,
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 2413,
                    labelParent: 7225,
                    labelDesc: "Registration",
                    labelName: "Registration",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTravelsNet%2FCommonGetSession.aspx%3FstrPage%3DCHS%2FTTSCarHireCarRegistrationMaster.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  }
                ]
              }
            ]
          },
          {
            labelCode: 7120,
            labelParent: 6,
            labelDesc: "Domestic/International Ticketing Services",
            labelName: "Domestic/International Ticketing Services",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 7224,
                labelParent: 7120,
                labelDesc: "Document",
                labelName: "Document",
                labelUrl: "",
                labelSortOrder: 2,
                labelShortCutKey: null,
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: [
                  {
                    labelCode: 3536,
                    labelParent: 7224,
                    labelDesc: "Flight Search / Availability",
                    labelName: "Flight Search / Availability",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTMS%2FCommonGetSession.aspx%3FstrPage%3DDToperation%2FFlightSchedule.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 3544,
                    labelParent: 7224,
                    labelDesc: "Route Review/Acceptance (NEW)",
                    labelName: "Route Review/Acceptance (NEW)",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTMS%2FCommonGetSession.aspx%3FstrPage%3DDToperation%2FQuotation.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 3534,
                    labelParent: 7224,
                    labelDesc: "Travel Request (TR)",
                    labelName: "Travel Request (TR)",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTMS%2FCommonGetSession.aspx%3FstrPage%3DDToperation%2FTravelRequest.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  },
                  {
                    labelCode: 3537,
                    labelParent: 7224,
                    labelDesc: "Traveller Profile",
                    labelName: "Traveller Profile",
                    labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTMS%2FCommonGetSession.aspx%3FstrPage%3DDToperation%2FTravelerProfile.aspx%26SessionID%3D",
                    labelSortOrder: 0,
                    labelShortCutKey: "NULL",
                    labelRoute: 0,
                    h_Level: 4,
                    num: 0,


                    childList: []
                  }
                ]
              }
            ]
          },
          {
            labelCode: 7123,
            labelParent: 6,
            labelDesc: "Lease Management",
            labelName: "Lease Management",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6178,
                labelParent: 7123,
                labelDesc: "Lease Data Flow to SSC",
                labelName: "Lease Data Flow to SSC",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FLeaseDoc%2FHRMLeaseDocumentIntegration.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 3706,
                labelParent: 7123,
                labelDesc: "Lease Document",
                labelName: "Lease Document",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FLeaseDoc%2FHRMLeaseDocument.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 3707,
                labelParent: 7123,
                labelDesc: "Lease Document Report",
                labelName: "Lease Document Report",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2Fhrmnet%2FCommonGetSession.aspx%3FstrPage%3DHRMPages%2FLeaseDoc%2FHRMLeaseDocumentEdit.aspx%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 7220,
            labelParent: 6,
            labelDesc: "Mail Despatch Services",
            labelName: "Mail Despatch Services",
            labelUrl: "",
            labelSortOrder: 4,
            labelShortCutKey: null,
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 2386,
                labelParent: 7220,
                labelDesc: "Despatch Register Entry",
                labelName: "Despatch Register Entry",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FOfficeAdmin%2FCommonGetSession.aspx%3FstrPage%3Ddespatch%2FDPDespatchRegister.asp%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 2388,
                labelParent: 7220,
                labelDesc: "POD Acknowledgment",
                labelName: "POD Acknowledgment",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FOfficeAdmin%2FCommonGetSession.aspx%3FstrPage%3Ddespatch%2FDPDespatchAcknowledgement.asp%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 2389,
                labelParent: 7220,
                labelDesc: "POD Certification",
                labelName: "POD Certification",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FOfficeAdmin%2FCommonGetSession.aspx%3FstrPage%3Ddespatch%2FDPDespatchCertification.asp%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 2387,
                labelParent: 7220,
                labelDesc: "POD Entry",
                labelName: "POD Entry",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FOfficeAdmin%2FCommonGetSession.aspx%3FstrPage%3Ddespatch%2FDPDespatchPODEntry.asp%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 2390,
                labelParent: 7220,
                labelDesc: "POD Service Allocation",
                labelName: "POD Service Allocation",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FOfficeAdmin%2FCommonGetSession.aspx%3FstrPage%3Ddespatch%2FDPDespatchServiceAllocation.Asp%26SessionID%3D",
                labelSortOrder: 0,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 4246,
            labelParent: 6,
            labelDesc: "Quotation(Intl)",
            labelName: "Quotation(Intl)",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTMS%2FCommonGetSession.aspx%3FstrPage%3DDtoperation%2FQuotation.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 4242,
            labelParent: 6,
            labelDesc: "Ticket Booking",
            labelName: "Ticket Booking",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTMS%2FCommonGetSession.aspx%3FstrPage%3DDToperation%2FBooking.aspx%26SessionID%3D",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 7474,
            labelParent: 6,
            labelDesc: "TMS",
            labelName: "TMS",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FTMS%2FCommonGetSession.aspx%3FstrPage%3DTransactions%2FCommon%2FTMSRequestApprovalList.aspx%26SessionID%3D",
            labelSortOrder: 1,
            labelShortCutKey: null,
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      }
    ]
  },
  {
    labelCode: 7273,
    labelParent: 0,
    labelDesc: "Engineering Apps",
    labelName: "Engineering Apps",
    labelUrl: "",
    labelSortOrder: 5,
    labelShortCutKey: null,
    labelRoute: 0,
    h_Level: 0,
    num: 0,


    childList: [
      {
        labelCode: 33,
        labelParent: 7273,
        labelDesc: "Document Management",
        labelName: "Document Management",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 7256,
            labelParent: 33,
            labelDesc: "EDMS Dashboard",
            labelName: "EDMS Dashboard",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FEDMS%2FCommonGetSession.aspx%3FstrPage%3DCommon%2FEDMSHome.aspx%26SessionID%3D",
            labelSortOrder: 1,
            labelShortCutKey: null,
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      },
      {
        labelCode: 24,
        labelParent: 7273,
        labelDesc: "EDRC",
        labelName: "EDRC",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 7251,
            labelParent: 24,
            labelDesc: "Employee",
            labelName: "Employee",
            labelUrl: "NULL",
            labelSortOrder: 4,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 2433,
                labelParent: 7251,
                labelDesc: "Organization",
                labelName: "Organization",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FEngSoft%2FCommonGetSession.aspx%3FstrPage%3DEMS%2FedrEMPMgmt.aspx%26SessionID%3D",
                labelSortOrder: 1,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 7253,
            labelParent: 24,
            labelDesc: "Engineering",
            labelName: "Engineering",
            labelUrl: "NULL",
            labelSortOrder: 6,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 2438,
                labelParent: 7253,
                labelDesc: "Technical Specification",
                labelName: "Technical Specification",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FEngSoft%2FCommonGetSession.aspx%3FstrPage%3DBOQ%2FboqHome.aspx%3FView=Home%26SessionID%3D",
                labelSortOrder: 1,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 7249,
            labelParent: 24,
            labelDesc: "Projects",
            labelName: "Projects",
            labelUrl: "NULL",
            labelSortOrder: 2,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 7258,
                labelParent: 7249,
                labelDesc: "Staff Selection",
                labelName: "Staff Selection",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FEngSoft%2FCommonGetSession.aspx%3FstrPage%3DPTS%2FedrPTSStaffSelection.aspx%26SessionID%3D",
                labelSortOrder: 1,
                labelShortCutKey: null,
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 7250,
            labelParent: 24,
            labelDesc: "Quality",
            labelName: "Quality",
            labelUrl: "NULL",
            labelSortOrder: 3,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 7259,
                labelParent: 7250,
                labelDesc: "View Audit Schedule",
                labelName: "View Audit Schedule",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FEngSoft%2FCommonGetSession.aspx%3FstrPage%3DATS%2FedrNCAuditPlan.aspx%26SessionID%3D",
                labelSortOrder: 1,
                labelShortCutKey: null,
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 2437,
            labelParent: 24,
            labelDesc: "Skillset",
            labelName: "Skillset",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FEngSoft%2FCommonGetSession.aspx%3FstrPage%3DTraining%2FedrSkillsetHome.aspx%26SessionID%3D",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          },
          {
            labelCode: 7248,
            labelParent: 24,
            labelDesc: "Timesheet",
            labelName: "Timesheet",
            labelUrl: "NULL",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 7257,
                labelParent: 7248,
                labelDesc: "TimeSheet Input",
                labelName: "TimeSheet Input",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FEngSoft%2FCommonGetSession.aspx%3FstrPage%3Dems%2FedrTimeSheetpro.aspx%26SessionID%3D",
                labelSortOrder: 1,
                labelShortCutKey: null,
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 7252,
            labelParent: 24,
            labelDesc: "Training",
            labelName: "Training",
            labelUrl: "NULL",
            labelSortOrder: 5,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 2436,
                labelParent: 7252,
                labelDesc: "Calendar",
                labelName: "Calendar",
                labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2FEngSoft%2FCommonGetSession.aspx%3FstrPage%3DReports%2FedrRepTrng.aspx%26SessionID%3D",
                labelSortOrder: 1,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          }
        ]
      },
      {
        labelCode: 31,
        labelParent: 7273,
        labelDesc: "Engineering",
        labelName: "Engineering",
        labelUrl: "NULL",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 7230,
            labelParent: 31,
            labelDesc: "LIMS",
            labelName: "LIMS",
            labelUrl: "NULL",
            labelSortOrder: 0,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 7231,
                labelParent: 7230,
                labelDesc: "Booking",
                labelName: "Booking",
                labelUrl: "https://crtc-lims.apps.lntecc.com/portal-booking",
                labelSortOrder: 1,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    labelCode: 4,
    labelParent: 0,
    labelDesc: "Finance",
    labelName: "Finance",
    labelUrl: "NULL",
    labelSortOrder: 7,
    labelShortCutKey: "NULL",
    labelRoute: 2,
    h_Level: 0,
    num: 0,


    childList: [
      {
        labelCode: 6621,
        labelParent: 4,
        labelDesc: "Financial Accounts",
        labelName: "Financial Accounts",
        labelUrl: "NULL",
        labelSortOrder: 7,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 6683,
            labelParent: 6621,
            labelDesc: "General Cash / Bank Request",
            labelName: "General Cash / Bank Request",
            labelUrl: "EIPFIN/CBV",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 4,
            h_Level: 2,
            num: 0,

            "widgetId": 5,
            childList: []
          },
          {
            labelCode: 6684,
            labelParent: 6621,
            labelDesc: "I Owe You (IOU)",
            labelName: "I Owe You (IOU)",
            labelUrl: "EIPFIN/IOU",
            labelSortOrder: 2,
            labelShortCutKey: "NULL",
            labelRoute: 4,
            h_Level: 2,
            num: 0,

            "widgetId": 5,
            childList: []
          }
        ]
      }
    ]
  },
  {
    labelCode: 20,
    labelParent: 0,
    labelDesc: "Project Management",
    labelName: "Project Management",
    labelUrl: "NULL",
    labelSortOrder: 8,
    labelShortCutKey: "NULL",
    labelRoute: 0,
    h_Level: 0,
    num: 0,


    childList: [
      {
        labelCode: 7061,
        labelParent: 20,
        labelDesc: "BOQ Std.",
        labelName: "BOQ Std.",
        labelUrl: "NULL",
        labelSortOrder: 30,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 6835,
            labelParent: 7061,
            labelDesc: "Post-bid",
            labelName: "Post-bid",
            labelUrl: "NULL",
            labelSortOrder: 36,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6817,
                labelParent: 6835,
                labelDesc: "Postbid BOQ Addition",
                labelName: "Postbid BOQ Addition",
                labelUrl: "SNAPLAN/BOQ/bqpba",
                labelSortOrder: 6,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 6816,
                labelParent: 6835,
                labelDesc: "Postbid Configuration",
                labelName: "Postbid Configuration",
                labelUrl: "SNAPLAN/BOQ/bqpbpc",
                labelSortOrder: 5,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 6818,
                labelParent: 6835,
                labelDesc: "Postbid Review",
                labelName: "Postbid Review",
                labelUrl: "SNAPLAN/BOQ/bqpbqu",
                labelSortOrder: 7,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          },
          {
            labelCode: 6834,
            labelParent: 7061,
            labelDesc: "Pre-bid",
            labelName: "Pre-bid",
            labelUrl: "NULL",
            labelSortOrder: 32,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: [
              {
                labelCode: 6814,
                labelParent: 6834,
                labelDesc: "Prebid BOQ Addition",
                labelName: "Prebid BOQ Addition",
                labelUrl: "SNAPLAN/BOQ/bqpra",
                labelSortOrder: 2,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 6813,
                labelParent: 6834,
                labelDesc: "Prebid Configuration",
                labelName: "Prebid Configuration",
                labelUrl: "SNAPLAN/BOQ/bqprpc",
                labelSortOrder: 1,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              },
              {
                labelCode: 6815,
                labelParent: 6834,
                labelDesc: "Prebid Review",
                labelName: "Prebid Review",
                labelUrl: "SNAPLAN/BOQ/bqprqu",
                labelSortOrder: 3,
                labelShortCutKey: "NULL",
                labelRoute: 0,
                h_Level: 3,
                num: 0,


                childList: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    labelCode: 1,
    labelParent: 0,
    labelDesc: "Supply Chain Mgmt",
    labelName: "Supply Chain Mgmt",
    labelUrl: "NULL",
    labelSortOrder: 9,
    labelShortCutKey: "NULL",
    labelRoute: 0,
    h_Level: 0,
    num: 0,


    childList: [
      {
        labelCode: 6569,
        labelParent: 1,
        labelDesc: "General Request",
        labelName: "General Request",
        labelUrl: "eipcrc/grui/index.html",
        labelSortOrder: 0,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: []
      },
      {
        labelCode: 6574,
        labelParent: 1,
        labelDesc: "Request",
        labelName: "Request",
        labelUrl: "NULL",
        labelSortOrder: 2,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 6575,
            labelParent: 6574,
            labelDesc: "General - Material",
            labelName: "General - Material",
            labelUrl: "EIPSCM/general-request/gr-create",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 2,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      },
      {
        labelCode: 6393,
        labelParent: 1,
        labelDesc: "Simplified Logistics Module",
        labelName: "Simplified Logistics Module",
        labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2Flogistics%2FCommonGetSession.aspx%3FstrPage%3DLMSNet%2FTWOM%2FTRHome.aspx%26SessionID%3D",
        labelSortOrder: 7,
        labelShortCutKey: "NULL",
        labelRoute: 0,
        h_Level: 1,
        num: 0,


        childList: [
          {
            labelCode: 7209,
            labelParent: 6393,
            labelDesc: "Home",
            labelName: "Home",
            labelUrl: "eiproot/sessiontransfer/?URL=https%3A%2F%2Feip4.lntecc.com%2Flogistics%2FCommonGetSession.aspx%3FstrPage%3DLMSNet%2FTWOM%2FTRHome.aspx%26SessionID%3D",
            labelSortOrder: 1,
            labelShortCutKey: "NULL",
            labelRoute: 0,
            h_Level: 2,
            num: 0,


            childList: []
          }
        ]
      }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class LabelDatabaseService {
  dataChange = new BehaviorSubject<LabelListNode[]>([]);

  get data(): LabelListNode[] { return this.dataChange.value; }
  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(LabellabelData, 0);

    // for (var lab in LabellabelData){
      
    // }
    // let labelData = Object.assign(new LabelListNode, LabellabelData);
    // Notify the change.
    this.dataChange.next(data);
  }
// https://stackblitz.com/edit/material-tree-flat?file=app%2Fapp.component.ts
//https://stackblitz.com/edit/material-tree-nested?file=app%2Fapp.component.ts
  buildFileTree(obj: { [key: string]: any }, level: number): LabelListNode[] {
    return Object.keys(obj).reduce<LabelListNode[]>((accumulator, key) => {
      debugger;
      const value = obj[key];
      const node = new LabelListNode();
      node.labelName = value.labelName;
      node.childList = value.childList;
      node.expandable = value.expandable;
      node.labelCode = value.labelCode;
      node.labelDesc = value.labelDesc;
      node.labelParent = value.labelParent;
      node.labelSortOrder = value.labelSortOrder;
      node.level = value.level;

      if (value != null) {
        if (typeof value === 'object') {
          node.childList = this.buildFileTree(value, level + 1);
        } else {
          node.labelName = value.labelName;
          node.childList = value.childList;
          node.expandable = value.expandable;
          node.labelCode = value.labelCode;
          node.labelDesc = value.labelDesc;
          node.labelParent = value.labelParent;
          node.labelSortOrder = value.labelSortOrder;
          node.level = value.level;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: LabelListNode, name: string) {
    if (parent.childList) {
      parent.childList.push({ labelName: name } as LabelListNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: LabelListNode, name: string) {
    node.labelName = name;
    this.dataChange.next(this.data);
  }
}
