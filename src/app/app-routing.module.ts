import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './competition/component/competition/competition.component';
import { FishComponent } from './fish/component/fish/fish.component';
import { MemberComponent } from './member/component/member/member.component';
import { LevelComponent } from './level/component/level/level.component';
import { AddMemberComponent } from './member/component/add-member/add-member.component';
import { RankingComponent } from './ranking/component/ranking/ranking.component';
import { PodiumComponent } from './ranking/component/podium/podium.component';

const routes: Routes = [
  {path:'' , component:CompetitionComponent},
  {path:'Competitions' , component:CompetitionComponent},
  {path:'Fishs' , component:FishComponent},
  {path:'Members' , component:MemberComponent},
  {path:'Levels' , component:LevelComponent},
  {path:'AddMember' , component:AddMemberComponent},
  {path:'Ranking' , component:RankingComponent},
  {path:'Podium/:id' , component:PodiumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
