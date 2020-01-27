import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {
  constructor(private main:MainService){

  }
  canActivate(){   
    return this.main.register;
    }
  
}
