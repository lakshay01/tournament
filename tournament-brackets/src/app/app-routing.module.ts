import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerManagementComponent } from './components/player-management/player-management.component';
import { BracketsComponent } from './components/brackets/brackets.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent},
  { path: 'management',  component: PlayerManagementComponent},
  { path: 'brackets',  component: BracketsComponent},
  { path: '**',  component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
