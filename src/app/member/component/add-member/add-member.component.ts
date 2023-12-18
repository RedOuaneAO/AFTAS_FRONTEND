import { Component } from '@angular/core';
import { MemberServiceService } from '../../Services/member-service.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css'
})
export class AddMemberComponent {
  formData:any={};
  successMessages:string ="";
  errorMessages:string ="";
  constructor(private memberService:MemberServiceService){}

  addMember(){
    this.memberService.addMember(this.formData).subscribe(data=>{
      console.log(data)
      this.successMessages ="You Have Added The Member Successfuly"  
    },error=>{
      this.errorMessages=error.error.message
    })
  }
}
