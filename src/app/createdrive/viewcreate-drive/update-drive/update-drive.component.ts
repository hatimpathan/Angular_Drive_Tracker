import { Component, OnInit , Inject, Output} from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MainService } from 'src/app/main.service';
import { createDriveModel } from 'src/app/models/createDriveModel';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData} from '../viewcreate-drive.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-drive',
  templateUrl: './update-drive.component.html',
  styleUrls: ['./update-drive.component.css']
})
export class UpdateDriveComponent implements OnInit {
  create:createDriveModel = new createDriveModel();
  driveform:FormGroup;
  constructor(private _main:MainService ,private formBulder:FormBuilder,public dialogRef: MatDialogRef<UpdateDriveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public _rout:Router){}
    posi={}
   ngOnInit()
  {
    this.driveform =this.formBulder.group({
    id:new FormControl('',[Validators.required]),
    companyname:new FormControl('',[Validators.required]),
    resource: new FormControl('',[Validators.required]),
    exp:new FormControl('',[Validators.required]),
    ctc:new FormControl('',[Validators.required]),
    position:new FormControl('',[Validators.required]),
    joining:new FormControl('',[Validators.required]),
    education:new FormControl('',[Validators.required]),
    followup: new FormControl('',[Validators.required]),
    bond:new FormControl('',[Validators.required]),  
  });
    this.loaddata();
  }

  loaddata()   
  {
     
    console.log("posi"+this.data.position);
    var ss=document.getElementById("s1");
    
 
  }
  submit(){
        this._main.updateDrive(this.driveform.value).subscribe();
        alert(" Your data is Updated Successfully");                 
      }
}
  