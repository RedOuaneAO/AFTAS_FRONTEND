import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';  
import { FishServiceService } from '../../Services/fish-service.service';
import { LevelServiceService } from '../../../level/Services/level-service.service';

@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrl: './add-fish.component.css'
})
export class AddFishComponent {
  formData:any = {};
  levels:any={}
  errorMessages: string = '';
  selectedLevel:number | null = null ;
  constructor(
    private dialogRef: MatDialogRef<AddFishComponent>,
    private fishService:FishServiceService,
    private levelService : LevelServiceService
  ){}
  ngOnInit(){
    this.levelService.getLevels().subscribe(data=>{
      this.levels = data
    })
  }
  onSubmit(){
    this.formData['levelCode']=this.selectedLevel;
    this.fishService.addFish(this.formData).subscribe((response)=> {
      console.log(response)
      this.dialogRef.close();
    },
    (error)=>{
      this.errorMessages = error.error.message;
    });
  }
}
