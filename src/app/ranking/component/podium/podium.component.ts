import { Component } from '@angular/core';
import { RankingService } from '../../Services/ranking.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GetRankingComponent } from '../get-ranking/get-ranking.component';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css'
})
export class PodiumComponent {
  Rankings:any[]=[];
  topThree:any[]=[];
  competitionCode:string |null='';
  constructor( 
    private rankingService : RankingService,
    private route: ActivatedRoute,
    private dialog: MatDialog
    ){}

  ngOnInit(){
    this.competitionCode= this.route.snapshot.paramMap.get('id');
    this.getRankingByCompCode()
    this.getTop3()
  }
  getRankingByCompCode(){
    this.rankingService.getRankingsBycompCode(this.competitionCode).subscribe(data=>{
      // console.log(data);
      this.Rankings=data
      console.log(this.Rankings)
    },error=>{
      console.log(error.error)
    });
  }
  getTop3(){
    this.rankingService.getTop3(this.competitionCode).subscribe(data=>{
      this.topThree=data
      console.log(data);
    })
  }

  getHuntedFish(memberNum:number ,competitionCode:string){
  const dialog = this.dialog.open(GetRankingComponent, {
    data: {
      memberNum: memberNum,
      competitionCode:competitionCode
    }
  });
}

}
