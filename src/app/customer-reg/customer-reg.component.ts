import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit {

  constructor(
    private userservice:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  register(userRegister:NgForm){
    console.log(userRegister.value);
    this.userservice.customerRegister(userRegister.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
