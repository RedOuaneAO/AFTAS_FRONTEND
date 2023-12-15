import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelComponent } from './component/level/level.component';
import { AddLevelComponent } from './component/add-level/add-level.component';
import { UpdateLevelComponent } from './component/update-level/update-level.component';



@NgModule({
  declarations: [
    LevelComponent,
    AddLevelComponent,
    UpdateLevelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LevelModule { }
