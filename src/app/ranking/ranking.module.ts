import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './component/ranking/ranking.component';
import { GetRankingComponent } from './component/get-ranking/get-ranking.component';
import { PodiumComponent } from './component/podium/podium.component';



@NgModule({
  declarations: [
    RankingComponent,
    GetRankingComponent,
    PodiumComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RankingModule { }
