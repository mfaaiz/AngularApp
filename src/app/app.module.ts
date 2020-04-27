import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WelcomeModule } from './welcome.module';
import {SignupComponent} from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AddacartComponent } from './auth/addacart/addacart.component';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {HttpModule } from '@angular/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {AuthService} from './auth/auth.service';
import {MatCardModule} from '@angular/material/card'; 
//import {AuthGuardAdmin} from './auth/auth-guard.admin.service';
import {HeaderComponent} from './navigation/header/header.component';
import { SidenavlistComponent } from './navigation/sidenavlist/sidenavlist.component';
import {Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LaptopComponent } from './laptop1/laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import {MatTableModule} from '@angular/material/table';
import { SetproductComponent } from './admin/setproduct/setproduct.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
  import{BackendService} from './service/backend.service';
  import {MatPaginatorModule} from '@angular/material/paginator';
import { Setproduct1Component } from './admin/setproduct1/setproduct1.component';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { AdminusersComponent } from './admin/adminusers/adminusers.component';
import { AdmincartsComponent } from './admin/admincarts/admincarts.component';
import { AdminordersComponent } from './admin/adminorders/adminorders.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { AboutusComponent } from './aboutus/aboutus.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion'; 
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AddacartComponent,
    HomeComponent,
    
HeaderComponent,

SidenavlistComponent,

LaptopComponent,

MobileComponent,

SetproductComponent,

Setproduct1Component,

AdmintabComponent,

AdminusersComponent,

AdmincartsComponent,

AdminordersComponent,

AboutusComponent,




  ],
  imports: [FormsModule,ReactiveFormsModule 
    ,BrowserModule,AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    WelcomeModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule ,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    AngularFirestoreModule,
    MatTabsModule ,
    MatCardModule,
    MatStepperModule,
    MatExpansionModule
  ],
  providers: [AuthService],//AuthGuardAdmin],
  bootstrap: [AppComponent]
})
export class AppModule { }
