import { TestBed, async, inject } from '@angular/core/testing';

import { MygurdGuard } from './mygurd.guard';

describe('MygurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MygurdGuard]
    });
  });

  it('should ...', inject([MygurdGuard], (guard: MygurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
