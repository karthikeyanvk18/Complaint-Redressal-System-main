import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component'; 
import { AllcomplaintsManagerComponent } from './allcomplaints-manager/allcomplaints-manager.component';
import { AllcomplaintsComponent } from './allcomplaints/allcomplaints.component';
import { AuthGuard } from './auth.guard';
import { ComplaintEngineerComponent } from './complaint-engineer/complaint-engineer.component';
import { ComplaintRegisterComponent } from './complaint-register/complaint-register.component';
import { ComplaintResolverService } from './complaint-resolver.service';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';
import { EngineerHomeComponent } from './engineer-home/engineer-home.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { MycomplaintsComponent } from './mycomplaints/mycomplaints.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'customerReg',component:CustomerRegComponent},
  {path:'adminHome',component:AdminHomeComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'engineerHome',component:EngineerHomeComponent,canActivate:[AuthGuard], data:{roles:['Engineer']}},
  {path:'managerHome',component:ManagerHomeComponent,canActivate:[AuthGuard], data:{roles:['Manager']}},
  {path:'customerHome',component:CustomerHomeComponent,canActivate:[AuthGuard], data:{roles:['Customer']}},
  {path:'complaintReg',component:ComplaintRegisterComponent,canActivate:[AuthGuard], data:{roles:['Customer']}},
  {path:'mycomplaints',component:MycomplaintsComponent,canActivate:[AuthGuard], data:{roles:['Customer']} },
  {path:'allcomplaints',component:AllcomplaintsComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'userList',component:UserListComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'allComplaintsManager',component:AllcomplaintsManagerComponent,canActivate:[AuthGuard], data:{roles:['Manager']}},
  {path:'complaintEngg',component:ComplaintEngineerComponent,canActivate:[AuthGuard], data:{roles:['Engineer']}}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
