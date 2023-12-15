import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionComponent } from './component/competition/competition.component';
import { AddCompetitionComponent } from './component/add-competition/add-competition.component';
import { UpdateCompetitionComponent } from './component/update-competition/update-competition.component';



@NgModule({
  declarations: [
    CompetitionComponent,
    AddCompetitionComponent,
    UpdateCompetitionComponent

  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    CompetitionComponent,
    AddCompetitionComponent,
    UpdateCompetitionComponent
  ]
})
export class CompetitionModule { }
