import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './competition/component/competition/competition.component';
import { FishComponent } from './fish/component/fish/fish.component';
import { MemberComponent } from './member/component/member/member.component';
import { LevelComponent } from './level/component/level/level.component';

const routes: Routes = [
  {path:'Competitions' , component:CompetitionComponent},
  {path:'Fishs' , component:FishComponent},
  {path:'Members' , component:MemberComponent},
  {path:'Levels' , component:LevelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }