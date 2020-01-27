import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  islog= new BehaviorSubject<boolean>(true);
  register= new BehaviorSubject<boolean>(true);
  constructor(private http:HttpClient) { }    
   login(loginform){
     return this.http.post("http://localhost:8080/DriveTracker/TpoLogin ",loginform,{responseType: 'text'}); 
     }
   registerpost(reg){
     alert("DAta is going to server:");
     return this.http.post("http://localhost:8080/DriveTracker/RegisterServlet",reg);
   }     
   createDrive(CreateDriveform){
     return this.http.post("http://localhost:8080/DriveTracker/CreateDrive",CreateDriveform);
     }
   viweDrive(){
     return this.http.get("http://localhost:8080/DriveTracker/ViewCreateDrive");
   }   
   DeletDrive(id){  
     return this.http.post("http://localhost:8080/DriveTracker/DeleteDrive",id);
    alert("deleted successfully");
    }
   updateDrive(updateDrive){
      return this.http.post("http://localhost:8080/DriveTracker/UpdateDrive",updateDrive);    
   }
}
