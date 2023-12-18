import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelComponent } from './component/level/level.component';
import { AddLevelComponent } from './component/add-level/add-level.component';
import { UpdateLevelComponent } from './component/update-level/update-level.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LevelComponent,
    AddLevelComponent,
    UpdateLevelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LevelComponent,
    AddLevelComponent
]
})
export class LevelModule { }
