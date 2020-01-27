import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import{loginModel} from '../models/loginModel';
import{ActivatedRoute, Router} from '@angular/router';
import { MainService } from '../main.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  user:loginModel = new  loginModel();
  loginform:FormGroup;
  constructor(private m:MainService,private formBuilder:FormBuilder,private router:Router) {}

ngOnInit() {
     this.m.register.next(false);
     this.m.islog.next(false);
    
    this.loginform = this.formBuilder.group({   
    'email':[this.user.email,[Validators.required,Validators.email]],
    'password':[this.user.password,
    [Validators.required,Validators.minLength(6),Validators.maxLength(30)]]
 });
}
pass:any;
onLoginSubmit(){
  this.m.login(this.loginform.value).subscribe((e:any)=>{
   this.pass = e;
   this.m.islog.next(true);    
   if(this.pass == "admin"){
        this.router.navigate(['home']);
         alert("wellcome "+this.pass);
         this.m.register.next(true);
      }else if(this.pass == "TPO")
          this.router.navigate(['creatDrive']);
        else
        alert("You have entered wrong password or email try again");
    });
  }
}