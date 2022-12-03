import { Injectable } from '@angular/core';
import { ManageTournamentService } from './manage-tournament.service';
import { Country } from '../shared/models/country.model';
import { Observable, of, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SessionDetailsService {
  private contestants: Country[] = [];
  contestantsSubject = new Subject<Country[]>();
  constructor(private manageTournamentService: ManageTournamentService) {
    this.contestants = [];
  }

  getContestants(): Observable<Country[]> {
    if (this.contestants && this.contestants.length > 0) {
      return of(this.contestants);
    } else {
      this.manageTournamentService.getTeams().subscribe(
        (resp) => {
          this.contestants = resp as Country[];
          this.contestantsSubject.next(this.contestants);
        }, (error) => {

        }
      )
      return this.contestantsSubject.asObservable();
    }
  }
}
