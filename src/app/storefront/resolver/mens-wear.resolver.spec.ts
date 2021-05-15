import { TestBed } from '@angular/core/testing';

import { MensWearResolver } from './mens-wear.resolver';

describe('MensWearResolver', () => {
  let resolver: MensWearResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MensWearResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
