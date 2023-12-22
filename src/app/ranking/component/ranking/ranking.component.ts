import { Component } from '@angular/core';
import { CompetitionServiceService } from '../../../competition/Services/competition-service.service';
import { MatDialog } from '@angular/material/dialog';
import { GetRankingComponent } from '../get-ranking/get-ranking.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {
  competitions:any[]=[];
constructor(private competitionService: CompetitionServiceService,
  private dialog: MatDialog,
  private router : Router){}

ngOnInit(){
  this.competitionService.getCompetitions().subscribe(data=>{
    this.competitions=data;
  });
}
// getRank(competitionCode:string){
//   const dialog = this.dialog.open(GetRankingComponent, {
//     data: {
//       competitionCode: competitionCode
//     }
//   });
// }

getRank(competitionCode:string){
  this.router.navigate(['/Podium/'+competitionCode]);
}

}
