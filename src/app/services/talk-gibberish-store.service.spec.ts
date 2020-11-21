import { TestBed } from '@angular/core/testing';

import { TalkGibberishStoreService } from './talk-gibberish-store.service';

describe('TalkGibberishStoreService', () => {
  let service: TalkGibberishStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalkGibberishStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
