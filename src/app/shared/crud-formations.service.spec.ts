import { TestBed } from '@angular/core/testing';

import { CrudFormationsService } from './crud-formations.service';

describe('CrudFormationsService', () => {
  let service: CrudFormationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudFormationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
