import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EngineerHomeComponent } from './engineer-home/engineer-home.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ComplaintRegisterComponent } from './complaint-register/complaint-register.component';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';
import { MycomplaintsComponent } from './mycomplaints/mycomplaints.component';
import { AllcomplaintsComponent } from './allcomplaints/allcomplaints.component';
import { UserListComponent } from './user-list/user-list.component';
import { AllcomplaintsManagerComponent } from './allcomplaints-manager/allcomplaints-manager.component';
import { ComplaintEngineerComponent } from './complaint-engineer/complaint-engineer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    AdminHomeComponent,
    EngineerHomeComponent,
    ManagerHomeComponent,
    CustomerHomeComponent,
    ComplaintRegisterComponent,
    CustomerRegComponent,
    MycomplaintsComponent,
    AllcomplaintsComponent,
    UserListComponent,
    AllcomplaintsManagerComponent,
    ComplaintEngineerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
