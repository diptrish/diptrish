import { TestBed } from '@angular/core/testing';

import { DiptrishService } from './diptrish.service';

describe('DiptrishService', () => {
  let service: DiptrishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiptrishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
