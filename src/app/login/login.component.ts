import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:any; 
  constructor(
    private userService:UserService,
    private userAuthSrvice:UserAuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  login(loginForm:NgForm){
    this.userService.login(loginForm.value).subscribe((response:any)=>{
      console.log(response);//this response contains the entered userdata
      // console.log(response.jwtToken);
      // console.log(response.user.role);
      this.userAuthSrvice.setRoles(response.user.role);
      this.userAuthSrvice.setToken(response.jwtToken);

      const role = response.user.role[0].roleName;//the value of role= Admin or User is present inside
      //user-->role-->roleName
      if(role =='Admin'){
        this.router.navigate(['/adminHome']);
      }
      else if(role =='Customer'){
        this.router.navigate(['/customerHome']);
      }
      else if(role =='Manager'){
        this.router.navigate(['/managerHome']);
      }
      else if(role =='Engineer'){
        this.router.navigate(['/engineerHome']);
      }
      else{
        this.msg = "Entered Credentials are incorrect";
      }
    },
    (error)=>{
      this.msg = "Entered Credentials are incorrect, Please try again!!";
      console.log(error);
    });
    console.log("Form is submitted");
    // console.log(loginForm.value); //This will print data values input in the form and print the console
  }

  registerUser(){
    this.router.navigate(['/customerReg']);
  }

}
