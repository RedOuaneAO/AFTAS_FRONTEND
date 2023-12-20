import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionComponent } from './component/competition/competition.component';
import { AddCompetitionComponent } from './component/add-competition/add-competition.component';
import { UpdateCompetitionComponent } from './component/update-competition/update-competition.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterInCompetitionComponent } from './component/register-in-competition/register-in-competition.component';
import { HuntingComponent } from './component/hunting/hunting.component';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [
    CompetitionComponent,
    AddCompetitionComponent,
    UpdateCompetitionComponent,
    RegisterInCompetitionComponent,
    HuntingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatPaginatorModule
  ],
  exports:[
    CompetitionComponent,
    AddCompetitionComponent,
    UpdateCompetitionComponent
  ]
})
export class CompetitionModule { }
