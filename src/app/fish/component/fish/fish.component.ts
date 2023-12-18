import { Component } from '@angular/core';
import { FishServiceService } from '../../Services/fish-service.service';
import { AddFishComponent } from '../add-fish/add-fish.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrl: './fish.component.css'
})
export class FishComponent {
  fishs:any[] =[]; 
  errorMessages: string = '';
  successMessages: string = '';
  constructor(
    private fishService:FishServiceService,
    public dialog:MatDialog
    // private router : Router,
    // public dialog:MatDialog
    ){}

  ngOnInit() {
    this.getFishs()
  }
  getFishs(){
    this.fishService.getFishs().subscribe(data=>{
      this.fishs = data;
    }, error=>{
        this.errorMessages = error.error.message;
      });
  }
  addFish() {
    const dialog = this.dialog.open(AddFishComponent);
    dialog.afterClosed().subscribe(()=>{
      this.getFishs();
      this.successMessages ="the fish has been added successfully"
    })
  }

}
