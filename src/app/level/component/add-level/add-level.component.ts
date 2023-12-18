import { Component } from '@angular/core';
import { LevelServiceService } from '../../Services/level-service.service';
import { MatDialogRef } from '@angular/material/dialog';  

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrl: './add-level.component.css'
})
export class AddLevelComponent {
  formData:any={};
  errorMessages:string="";
constructor(private levelService : LevelServiceService,
  private dialogRef: MatDialogRef<AddLevelComponent>){}


  addLevel(){
    this.levelService.addLevel(this.formData).subscribe(data=>{
      this.dialogRef.close();
    },
    (error)=>{
      this.errorMessages = error.error.message;
    });
  }

}
