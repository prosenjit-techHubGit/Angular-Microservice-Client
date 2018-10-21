import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule,MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule,MatFormFieldModule } from '@angular/material';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AssignmentDetailsComponent } from './assignment-details/assignment-details.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { HttpClientModule,HttpHeaders,HttpClient, HttpInterceptor, HttpHandler }    from '@angular/common/http';
import { EmployeeDataService } from './employee-data.service';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { HttpRequest } from 'selenium-webdriver/http';
import { CommonModule } from '@angular/common';



/*const appRoutes: Routes = [
  { path: 'employee', component: EmployeeDetailsComponent },
  { path: 'assignment', component: AssignmentDetailsComponent }
  
];*/

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    EmployeeDetailsComponent,
    AssignmentDetailsComponent,   
    EmployeeListComponent,
    DashbaordComponent,
    AssignmentListComponent,
    EmployeeCreateComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,    
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  
  ],
  providers: [HttpClient,EmployeeDataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

