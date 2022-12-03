import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageTournamentService {

  constructor(public httpClient: HttpClient) { }
  rootURL = '/api';
  teamDetails = [];

  getTeams(){
    return this.httpClient.get(this.rootURL + '/teams');
  }

}
