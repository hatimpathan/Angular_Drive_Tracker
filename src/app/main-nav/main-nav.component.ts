import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

isHandset$: Observable<boolean> =  this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  islog
  register
  constructor(private breakpointObserver: BreakpointObserver,private http:MainService) {}
  
 ngOnInit(){
  this.http.islog.subscribe(e=> {
    this.islog=e;
  });
  this.http.register.subscribe(e=>{
    this.register=e;
  })
}


}
