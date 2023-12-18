import { Component } from '@angular/core';
import { MemberServiceService } from '../../../member/Services/member-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  members:any[]=[];

constructor(   private memberService:MemberServiceService,
  private router:Router){}

  ngOnInit(){
    this.getMembers();
  }
  getMembers(){
    this.memberService.getMembers().subscribe(data=>{
      this.members=data
      })
  }
  addNewMember(){
    this.router.navigate(["/AddMember"])
  }
}
