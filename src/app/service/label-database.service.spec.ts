import { TestBed } from '@angular/core/testing';

import { LabelDatabaseService } from './label-database.service';

describe('LabelDatabaseService', () => {
  let service: LabelDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
