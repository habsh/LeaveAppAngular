import { TestBed } from '@angular/core/testing';

import { ApplyDenyService } from './apply-deny.service';

describe('ApplyDenyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplyDenyService = TestBed.get(ApplyDenyService);
    expect(service).toBeTruthy();
  });
});
