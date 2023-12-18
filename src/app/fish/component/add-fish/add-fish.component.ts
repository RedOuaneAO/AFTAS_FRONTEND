import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';  
import { FishServiceService } from '../../Services/fish-service.service';

@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrl: './add-fish.component.css'
})
export class AddFishComponent {
  formData:any = {};
  errorMessages: string = '';


  constructor(
    private dialogRef: MatDialogRef<AddFishComponent>,
    private fishService:FishServiceService
  ){}
  onSubmit(){
    this.fishService.addFish(this.formData).subscribe((response)=> {
      console.log(response)
      this.dialogRef.close();
    },
    (error)=>{
      this.errorMessages = error.error.message;
    });
  }
}
