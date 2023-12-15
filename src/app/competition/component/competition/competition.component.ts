import { Component,Inject } from '@angular/core';
import { CompetitionServiceService } from '../../Services/competition-service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddCompetitionComponent } from '../add-competition/add-competition.component';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
  
})
export class CompetitionComponent {
  competitions:any[] =[]; 
  errorMessages: string = '';

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
    // this.competitions = [];
    this.getCompetitions();
  })
  // this.router.navigate(['/AddCompetition']);
}

}
