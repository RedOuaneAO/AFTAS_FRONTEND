import { Component } from '@angular/core';
import { CompetitionServiceService } from '../../Services/competition-service.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrl: './add-competition.component.css'
})
export class AddCompetitionComponent {
  errorMessages: string = '';
  successMessages: string = '';
  formData:any = {};
  
  constructor(
  public dialogRef: MatDialogRef<AddCompetitionComponent>,
  private competitionService : CompetitionServiceService,
  private router : Router
  ){}
  onSubmit(){
    // alert(this.formData.endTime)
      this.competitionService.addCompetition(this.formData).subscribe( (response) => {
        console.log('Successfully submitted:', response);
        this.successMessages ="the competition has been added successfully";
        this.dialogRef.close();
        // this.router.navigate(['/Competitions']);
      },
      (error)=>{
        this.errorMessages = error.error.message;
      });
      
  }

}
