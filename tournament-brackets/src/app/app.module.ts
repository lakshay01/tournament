import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import { ManageTournamentService } from './services/manage-tournament.service';
import { PlayerManagementComponent } from './components/player-management/player-management.component';
import { TeamManagementComponent } from './components/team-management/team-management.component';
import { MatTableModule } from '@angular/material/table';
import { AccordionModule } from 'primeng/accordion';
import { LoaderComponent } from './components/loader/loader.component';
import { SpinnerInterceptor } from './services/request-interceptor';
import { LoaderService } from './services/loader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { BracketsComponent } from './components/brackets/brackets.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TooltipModule } from "primeng/tooltip";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerManagementComponent,
    TeamManagementComponent,
    LoaderComponent,
    BracketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatTableModule,
    AccordionModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    CalendarModule,
    ButtonModule,
    MatButtonToggleModule,
    TooltipModule
  ],
  providers: [ManageTournamentService,LoaderService,MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }],
  entryComponents:[PlayerManagementComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
