import { TestBed } from '@angular/core/testing';

import { SubServicuiosService } from './sub-servicuios.service';

describe('SubServicuiosService', () => {
  let service: SubServicuiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubServicuiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
