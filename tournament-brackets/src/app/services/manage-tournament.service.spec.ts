import { TestBed } from '@angular/core/testing';

import { ManageTournamentService } from './manage-tournament.service';

describe('ManageTournamentService', () => {
  let service: ManageTournamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTournamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
