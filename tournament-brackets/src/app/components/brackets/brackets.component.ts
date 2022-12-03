import { Component, OnInit } from '@angular/core';
import { SessionDetailsService } from '../../services/session-details.service';
import { Country, Round } from '../../shared/models/country.model';


export enum UserRole {
  ROUND8 = 'Quarter Final',
  ROUND4 = 'Semi Final',
  ROUND2 = 'Final'
}

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.scss']
})


export class BracketsComponent implements OnInit {

  constructor(private sessionDetailsService: SessionDetailsService) { }
  qualifiedTeams: Country[] = [];
  roundDetails:any=[];
  matches:any=[];
  name:string='';
  currentRound=1;
  roundQualifiedTeams:any=[];
  error= false;
  declareWinner = false;
  winnerName='';



  ngOnInit(): void {
    this.sessionDetailsService.getContestants()
      .subscribe(
        (resp) => {
          this.qualifiedTeams = resp as Country[];
          const numberOfRounds = Math.log(this.qualifiedTeams.length) / Math.log(2);
          this.roundDetails = new Array(numberOfRounds).fill(0).map(function(item, index) {
           item = {roundNo: index+1, teams:[], winners:[], matches:[]}
            return item;
          });
          const matchesNo = new Array(this.qualifiedTeams.length /2).fill(0).map(function(item, index) {
            item = index + 1;
            return item;
          });

          this.editRoundDetails(matchesNo,this.currentRound, this.qualifiedTeams);

        }, (error: any) => {

        }
      )
  }

  editRoundDetails(matches:any,roundNos:number, teams?:any, completeRound?:boolean){



    this.roundDetails.filter((obj: { roundNo: number; teams:any; winners:any;}) => obj.roundNo === roundNos)
    .map((obj1: { roundNo: number; teams:any; winners:any;matches:any}) => {
     if (obj1.roundNo === roundNos) {
      obj1.teams = teams;
      obj1.matches = matches;
    };
     return obj1;
   });
   if(completeRound){
    this.roundDetails.filter((obj: { roundNo: number; teams:any; winners:any;matches:any}) => obj.roundNo === roundNos-1)
    .map((obj1: { roundNo: number; teams:any; winners:any;}) => {
     if (obj1.roundNo === roundNos-1) {
      obj1.winners = teams};
      // obj1.winners =this.qualifiedTeams};
     return obj1;
   });
   }

  }

  noOfMatches(){
   return new Array(this.qualifiedTeams.length /2).fill(0).map(function(item, index) {
      item = index + 1;
      return item;
    });
  }

  completeRound(){
    this.declareWinner = false;
    this.winnerName="";
        this.currentRound = this.currentRound+1;
        const prevRoundDetails= this.roundDetails.filter((obj: { roundNo: number; teams:any; winners:any;}) => obj.roundNo === this.currentRound-1)[0];
        let prevRoundWinner = prevRoundDetails.winners;

        const nextRoundTeams = prevRoundDetails.teams.filter(function (el:any) {
          return prevRoundWinner.indexOf(el.name) >= 0;
        });
        if((prevRoundWinner.length === 1 && nextRoundTeams.length ===1) && prevRoundWinner.length=== prevRoundDetails.matches.length){
          this.declareWinner = true;
          this.winnerName = prevRoundWinner[0];
          return;
        }
        if(prevRoundDetails.winners.length%2 != 0){
          this.error = true;
          this.currentRound = this.currentRound-1;
          return;
        }
        let matches = new Array(prevRoundDetails.winners.length/2).fill(0).map(function(item, index) {
          item = index + 1;
          return item;
        });
        if((prevRoundWinner.length !=0 && nextRoundTeams.length!=0 &&  prevRoundWinner.length!= nextRoundTeams.length) || (prevRoundWinner.length ===0 || nextRoundTeams.length===0)
        || prevRoundWinner.length!= prevRoundDetails.matches.length){
          this.error = true;
          this.currentRound = this.currentRound-1;
        } else{
          this.error = false;
          this.editRoundDetails(matches as [],this.currentRound,nextRoundTeams,  true);
        }
        }

}


