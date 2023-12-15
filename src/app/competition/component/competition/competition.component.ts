import { Component,Inject } from '@angular/core';
import { CompetitionServiceService } from '../../Services/competition-service.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent {
  competitions:any[] =[]; 
  errorMessages: string = '';
 constructor(private CompetitionService:CompetitionServiceService,
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

}
