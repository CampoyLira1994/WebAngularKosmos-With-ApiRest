import { TestBed } from '@angular/core/testing';

import { DerechosService } from './derechos.service';

describe('DerechosService', () => {
  let service: DerechosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DerechosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
