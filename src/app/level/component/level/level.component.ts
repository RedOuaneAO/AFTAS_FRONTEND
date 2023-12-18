import { Component } from '@angular/core';
import { LevelServiceService } from '../../Services/level-service.service';
import { AddLevelComponent } from '../add-level/add-level.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})
export class LevelComponent {
  Levels :any[]=[]; 
  successMessages:string="";
  constructor(private levelService:LevelServiceService,
    public dialog:MatDialog){}

  ngOnInit() {
    this.getLevels()
  }
  getLevels(){
    this.levelService.getLevels().subscribe(data=>{
      this.Levels=data
    })
  }
  addLevel(){
    const dialog = this.dialog.open(AddLevelComponent);
    dialog.afterClosed().subscribe(()=>{
      this.getLevels();
      this.successMessages ="the level has been added successfully"
    })
  }
}
