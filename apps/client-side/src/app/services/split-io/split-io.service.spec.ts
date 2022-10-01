import { TestBed } from '@angular/core/testing';

import { SplitIoService } from './split-io.service';

describe('SplitService', () => {
  let service: SplitIoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplitIoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
