import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class MygurdGuard implements CanActivate {
  constructor(private m:MainService){

  }
  canActivate()
  {
    return this.m.islog;
  }
  
}
