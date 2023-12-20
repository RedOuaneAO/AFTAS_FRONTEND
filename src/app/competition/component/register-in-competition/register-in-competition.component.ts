import { Component ,Inject} from '@angular/core';
import { CompetitionServiceService } from '../../Services/competition-service.service';
import { MemberServiceService } from '../../../member/Services/member-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-in-competition',
  templateUrl: './register-in-competition.component.html',
  styleUrl: './register-in-competition.component.css'
})
export class RegisterInCompetitionComponent {
  members:any[]=[];
  selectedMemberNum: number[] =[];
  formData:any = {};
  successMessage:string="";
  errorMessages:string="";
  constructor(
    private memberService:MemberServiceService,
    private competitionService :CompetitionServiceService,
    public dialogRef: MatDialogRef<RegisterInCompetitionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router : Router
  ){}
  ngOnInit(){
    this.getMembers();
  }
  getMembers(){
    this.memberService.getMembers().subscribe(data=>{
      this.members=data
      })
  }
  CheckedMembers(memberNum: number){
    const index = this.selectedMemberNum.indexOf(memberNum);
    if (index == -1) {
      this.selectedMemberNum.push(memberNum);
    } else {
      this.selectedMemberNum.splice(index, 1);
    }
    console.log(this.selectedMemberNum)
  }
  particepate(){
    if(this.selectedMemberNum.length==0){
      this.errorMessages="Please Select a Member"
      return;
    }
    this.formData['competitionCode'] = this.data.competitionCode;
    this.formData['memberNum']=this.selectedMemberNum;
    this.competitionService.particepateIntoCompetition(this.formData).subscribe(Response=>{
      console.log(Response);
    this.successMessage="You have registred successufuly"
    },(error)=>{
      this.errorMessages=error.error.message
    })
  }
 
  addNewMember(){
    this.dialogRef.close();
    this.router.navigate(["/AddMember"])

  }
}
