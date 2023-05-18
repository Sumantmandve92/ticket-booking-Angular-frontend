import { TestBed } from '@angular/core/testing';

import { MSRTCGuard } from './msrtc.guard';

describe('MSRTCGuard', () => {
  let guard: MSRTCGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MSRTCGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
