import { Component,Inject } from '@angular/core';
import { CompetitionServiceService } from '../../Services/competition-service.service';
import { Router } from '@angular/router';
import { AddCompetitionComponent } from '../add-competition/add-competition.component';
import { RegisterInCompetitionComponent } from '../register-in-competition/register-in-competition.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HuntingComponent } from '../hunting/hunting.component';


@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css',
  
})
export class CompetitionComponent {
  competitions:any[] =[]; 
  errorMessages: string = '';
  status:string ="Finished";

 constructor(
      private CompetitionService:CompetitionServiceService,
      private router : Router,
      public dialog:MatDialog
      ){}

 ngOnInit() {
  this.getCompetitions()
}
getCompetitions(){
  this.CompetitionService.getCompetitions().subscribe(data=>{
    this.competitions = data;
  }, error=>{
    this.errorMessages = error.error.message;
  });
  
}

addCompetition(){
  const dialog = this.dialog.open(AddCompetitionComponent);
  dialog.afterClosed().subscribe(()=>{
    this.getCompetitions();
  })
  // this.router.navigate(['/AddCompetition']);
}
participate(competitionCode :string){
      const dialog = this.dialog.open(RegisterInCompetitionComponent, {
        data: {
          competitionCode: competitionCode
        }
      });
}
addHunting(competitionCode:string){
    const dialog = this.dialog.open(HuntingComponent,{
      data: {
        competitionCode: competitionCode
      }
    })
}

}
