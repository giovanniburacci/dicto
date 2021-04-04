import { TestBed } from '@angular/core/testing';

import { FavWordsService } from './fav-words.service';

describe('FavWordsService', () => {
  let service: FavWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
