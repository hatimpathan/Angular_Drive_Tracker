import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule} from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CreatedriveComponent } from './createdrive/createdrive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViwecreateDriveComponent } from './createdrive/viewcreate-drive/viewcreate-drive.component';
import { UpdateDriveComponent } from './createdrive/viewcreate-drive/update-drive/update-drive.component';
import { PositionPipe } from './position.pipe';
import { JoiningPipe } from './joining.pipe';
import { EducationPipe } from './education.pipe';
import { BondPipe } from './bond.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MainNavComponent,
    CreatedriveComponent,
    PageNotFoundComponent,
    ViwecreateDriveComponent,
    UpdateDriveComponent,
    PositionPipe,
    JoiningPipe,
    EducationPipe,
    BondPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
