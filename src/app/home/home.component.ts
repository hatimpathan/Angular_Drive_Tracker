import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=blur-close-up-code-computer-546819.jpg&fm=jpg";


  constructor(private http:MainService) { 

  }
  ngOnInit() {
   
  }

}
