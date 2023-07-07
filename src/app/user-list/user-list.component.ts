import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userinfo: any|Role| User[];
  constructor(
    private userService:UserService,
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe( 
      (resp) =>{
        this.userinfo = resp;
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    //   data=>{
    //   console.log(data);
    //   this.userinfo = data;
    // }
    );
  }

  public deleteUser(userName){
    console.log(userName);
    this.userService.deleteUser(userName).subscribe((resp)=>{
      console.log(resp);
      this.getAllUsers();
    },
    (error:HttpErrorResponse)=>{
      console.log(error);
    })
  }

}
