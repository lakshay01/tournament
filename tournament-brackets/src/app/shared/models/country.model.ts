import { Player } from './player.model';

export interface Country {
  name: string;
  ranking: number;
  players:Player[]
}


export interface Round {
  no: number;
  countries: Country[];
  matches:number[],
  roundWinners:[]
}

export interface Rounds {
  round: Round[];
  matches:number[],
  roundWinners:[]
}


