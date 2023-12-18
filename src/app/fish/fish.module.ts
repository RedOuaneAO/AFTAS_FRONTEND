import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishComponent } from './component/fish/fish.component';
import { AddFishComponent } from './component/add-fish/add-fish.component';
import { UpdateFishComponent } from './component/update-fish/update-fish.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FishComponent,
    AddFishComponent,
    UpdateFishComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FishModule { }
