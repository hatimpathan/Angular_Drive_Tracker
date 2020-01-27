import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { MainService } from '../main.service';
import { createDriveModel } from '../models/createDriveModel';

import {Router} from '@angular/router';
@Component({
  selector: 'app-createdrive',
  templateUrl: './createdrive.component.html',
  styleUrls: ['./createdrive.component.css']
})
export class CreatedriveComponent implements OnInit {
  create:createDriveModel = new createDriveModel();
  driveform:FormGroup;
  constructor(private _main:MainService ,private formBulder:FormBuilder,private _rout:Router){}

   ngOnInit()
  {
    this.driveform =this.formBulder.group({
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
  
  }
  
  submit(){
        this._main.createDrive(this.driveform.value).subscribe();
        alert(" Data inserted Successfull");
        this.driveform.reset();
      }
     Clear(){
      this.driveform.reset(); 
     }  
     openView(){
        this._rout.navigate(['/viweDrive']);
    }
      
    

}