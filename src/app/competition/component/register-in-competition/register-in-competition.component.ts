import { Component ,Inject} from '@angular/core';
import { CompetitionServiceService } from '../../Services/competition-service.service';
import { MemberServiceService } from '../../../member/Services/member-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-in-competition',
  templateUrl: './register-in-competition.component.html',
  styleUrl: './register-in-competition.component.css'
})
export class RegisterInCompetitionComponent {
  members:any[]=[];
  selectedMemberNum: number | null = null;
  formData:any = {};
  successMessage:string="";
  errorMessages:string="";
  constructor(
    private memberService:MemberServiceService,
    private competitionService :CompetitionServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}
  ngOnInit(){
    this.getMembers();
  }
  getMembers(){
    this.memberService.getMembers().subscribe(data=>{
      this.members=data
      })
  }
  particepate(){
    this.formData['competitionCode'] = this.data.competitionCode;
    this.formData['memberNum']=this.selectedMemberNum;
    this.competitionService.particepateIntoCompetition(this.formData).subscribe(Response=>{
      console.log(Response);
     this.successMessage="You have registred successufuly"
    },(error)=>{
      this.errorMessages=error.error.message
    })

  }
}
