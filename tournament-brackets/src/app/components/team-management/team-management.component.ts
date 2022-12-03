import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Player} from '../../shared/models/player.model';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.player = {
      firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: new Date()
    }
  }
  @Input() team: any;
  firstName:any;
  lastName:any;
  dateValue:Date = new Date();
  submitted = false;
  gender:string ="Male";
  player:Player = {
    firstName: '',
  lastName: '',
  gender: '',
  dateOfBirth: new Date()
  }

  addPlayer() {
    this.player.dateOfBirth=this.dateValue;
    this.player.firstName=this.firstName;
    this.player.lastName=this.lastName;
    this.player.gender=this.gender;
this.team.players.push(this.player);
    this.submitted = true;
  }

}
