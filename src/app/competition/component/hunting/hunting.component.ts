import { Component, Inject } from '@angular/core';
import { MemberServiceService } from '../../../member/Services/member-service.service';
import { CompetitionServiceService } from '../../Services/competition-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FishServiceService } from '../../../fish/Services/fish-service.service';

@Component({
  selector: 'app-hunting',
  templateUrl: './hunting.component.html',
  styleUrl: './hunting.component.css'
})
export class HuntingComponent {
  members:any[] = [];
  fishs:any[] = [];
  selectedMember:number |null = null;
  selectedFish:string=""
  formData:any={};
  errorMessages: string = '';
  successMessages: string = '';
  constructor(
    private memberService : MemberServiceService,
    private competitionService :CompetitionServiceService,
    private fishService : FishServiceService,
    @Inject(MAT_DIALOG_DATA) public competitionCode: any
    ){}
ngOnInit(){
  this.getMembers();
  this.getFishs();
}
getMembers(){
  this.memberService.getMembers().subscribe(data=>{
    this.members=data
    })
}
getFishs(){
  this.fishService.getFishs().subscribe(data=>{
    this.fishs=data
  })
}
addHunt(){
  this.formData['competitionCode'] =this.competitionCode.competitionCode;
  this.formData['memberNum']=this.selectedMember;
  this.formData['fishName']=this.selectedFish;
  console.log(this.formData);
    this.competitionService.addHunting(this.formData).subscribe(data=>{
      this.successMessages="Congratilation You have Hunt a Big Fish ! do you want to try again ?"
    },(error)=>{
      this.errorMessages=error.error.message
    })
}
}
