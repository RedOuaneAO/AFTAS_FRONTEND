import { Component,Inject } from '@angular/core';
import { RankingService } from '../../Services/ranking.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-ranking',
  templateUrl: './get-ranking.component.html',
  styleUrl: './get-ranking.component.css'
})
export class GetRankingComponent {
  huntedFish:any=[]
    constructor(
      private rankingService : RankingService,
      @Inject(MAT_DIALOG_DATA) public data: any){}


    ngOnInit(){
      this.getMemberHunt()
    }
    getMemberHunt(){
      console.log(this.data.competitionCode);
      console.log(this.data.memberNum);
     this.rankingService.getMemberHunt(this.data.competitionCode , this.data.memberNum).subscribe(data=>{
      console.log(data)
      this.huntedFish=data;
     },error=>{
      console.log(error)
     }) 
    }
}
