import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreatedriveComponent } from './createdrive/createdrive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViwecreateDriveComponent } from './createdrive/viewcreate-drive/viewcreate-drive.component';
import { UpdateDriveComponent } from './createdrive/viewcreate-drive/update-drive/update-drive.component';
import { MygurdGuard } from './mygurd.guard';
import { RegisterGuard } from './register.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[MygurdGuard]},
  {path:'register',component:RegisterComponent,canActivate:[RegisterGuard]},
  {path:'creatDrive',component:CreatedriveComponent,canActivate:[MygurdGuard]},
  {path:'viweDrive',component:ViwecreateDriveComponent,canActivate:[MygurdGuard]},
  {path:'updatedrive',component:UpdateDriveComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];
@NgModule({   
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
