import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminService } from './admin.service';
import { SuccessfulComponent } from './successful/successful.component';
import { AddTestComponent } from './add-test/add-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { GetTestComponent } from './get-test/get-test.component';
import { UpdateTestComponent } from './update-test/update-test.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    SuccessfulComponent,
    AddTestComponent,
    DeleteTestComponent,
    GetTestComponent,
    UpdateTestComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
