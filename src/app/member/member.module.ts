import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './component/member/member.component';
import { AddMemberComponent } from './component/add-member/add-member.component';
import { UpdateMemberComponent } from './component/update-member/update-member.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MemberComponent,
    AddMemberComponent,
    UpdateMemberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
      MemberComponent,
    AddMemberComponent
  ]
})
export class MemberModule { }
