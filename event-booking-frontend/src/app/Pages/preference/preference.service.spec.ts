import { TestBed } from '@angular/core/testing';

import { PreferencesService } from './preference.service';

describe('PreferenceService', () => {
  let service: PreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
