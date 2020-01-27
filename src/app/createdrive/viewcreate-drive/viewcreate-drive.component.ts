import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateDriveComponent } from './update-drive/update-drive.component';

export interface DialogData {
  id: number;
  companyname:string;
  resource:number;
  exp:any;
  ctc:number;
  position:any;
  joining:any;
  education:any;
  followup:string;
  bond:any;
}

@Component({
  selector: 'app-viwecreate-drive',
  templateUrl:'./viewcreate-drive.component.html',
  styleUrls:['./viewcreate-drive.component.css']
})
export class ViwecreateDriveComponent implements OnInit{
  
   drive:any[];

   val:any='';

  /*  dataSource = new MatTableDataSource(this.drive);
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue
  } */
    public doFilter (value: any) {
     console.log("company name"+value);
    this.val=value;
  } 

  constructor(private _main:MainService, public dialog: MatDialog,) { }
  ngOnInit() { 
      this.viewDeatils();
  } 
  Delete(id){
      this._main.DeletDrive(id).subscribe((_e:any)=>{
        this.viewDeatils();
      });  
  }

  viewDeatils(){
    this.drive=null;
    this._main.viweDrive().subscribe((e:any[])=>{
    this.drive = e; 
      }
    ); 
  }
  id;
  companyname;
  resource;
  exp;
  ctc;
  position;
  joining;
  education;
  followup;
  bond;
  tempobj:any={};
  
  edit(e){
    this.id=e.id;
    this.companyname=e.companyname;
    this.resource=e.resource;
    this.exp = e.exp;
    this.ctc = e.ctc;
    this.position=e.position;
    this.joining=e.joining;
    this.education=e.education;
    this.followup=e.followup;
    this.bond=e.bond;
  }
  openDialog() {     
    const dialogRef = this.dialog.open(UpdateDriveComponent,{
      data:{
        id:this.id,companyname:this.companyname,resource:this.resource,exp:this.exp,
        ctc:this.ctc,position:this.position,joining:this.joining,education:this.education,
        followup:this.followup,bond:this.bond
      }
            }); 
      dialogRef.afterClosed().subscribe(result =>{
          this.viewDeatils();
      });
    } 
}
