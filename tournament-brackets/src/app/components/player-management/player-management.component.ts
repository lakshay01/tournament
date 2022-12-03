import { Component, OnInit } from '@angular/core';
import { SessionDetailsService } from '../../services/session-details.service';
import { Country } from '../../shared/models/country.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import {TeamManagementComponent } from '../team-management/team-management.component'
@Component({
  selector: 'app-player-management',
  templateUrl: './player-management.component.html',
  styleUrls: ['./player-management.component.scss']
})
export class PlayerManagementComponent implements OnInit {

  constructor(private sessionDetailsService: SessionDetailsService,
    private modalService: NgbModal, private messageService: MessageService) { }
  qualifiedTeams: Country[] = [];
  displayedColumns = ['name', 'ranking'];
  grouped: { [key: string]: Country[]  } = {};
  activeState: boolean[] = [true, false, false];

  ngOnInit(): void {
    this.sessionDetailsService.getContestants()
    .subscribe(
      (resp) =>{
        this.qualifiedTeams = resp as Country[];
        this.grouped = this.qualifiedTeams.reduce((group: { [x: string]: Country[]; }, current:any)=> {
          const groupingKey = `${current.name}`;
          group[groupingKey] = group[groupingKey] || [];
          group[groupingKey].push(current);
          return group;
          }, {})

      }, (error) =>{

      }
    )
  }


  addPlayer(team:any){
    const modalRef = this.modalService.open(TeamManagementComponent);
    modalRef.componentInstance.team = team;

  }


}
