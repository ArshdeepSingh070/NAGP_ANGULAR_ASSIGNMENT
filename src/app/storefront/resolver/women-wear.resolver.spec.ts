import { TestBed } from '@angular/core/testing';

import { WomenWearResolver } from './women-wear.resolver';

describe('WomenWearResolver', () => {
  let resolver: WomenWearResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WomenWearResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
