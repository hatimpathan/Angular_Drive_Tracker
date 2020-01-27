import { Component, OnInit } from '@angular/core';
import{RegisterModel} from '../models/register.model';
import{FormGroup,FormBuilder,Validator, Validators, MinLengthValidator}  from '@angular/forms';
import { MainService } from '../main.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    hide=true;
    user:RegisterModel = new  RegisterModel();
    registerform:FormGroup;
    constructor(private formBuilder:FormBuilder,private main:MainService) {}
   
   ngOnInit(){
   this.registerform = this.formBuilder.group({
     'name':[this.user.name,[Validators.required]],
     'email':[this.user.email,[Validators.required,Validators.email]],
     'date':[this.user.date,[Validators.required]],
     'password':[this.user.password,
      [Validators.required,Validators.minLength(6),Validators.maxLength(30)]],
      'role':[this.user.role,[Validators.required]]
   });
  }
  Submit(){
   this.main.registerpost(this.registerform.value).subscribe();
   this.registerform.reset();
  }
}
