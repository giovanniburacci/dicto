import { TestBed } from '@angular/core/testing';

import { RecentsearchesService } from './recentsearches.service';

describe('RecentsearchesService', () => {
  let service: RecentsearchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentsearchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
