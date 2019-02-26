import { TestBed } from '@angular/core/testing';

import { ManagerDetailService } from './manager-detail.service';

describe('ManagerDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerDetailService = TestBed.get(ManagerDetailService);
    expect(service).toBeTruthy();
  });
});
