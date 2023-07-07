import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';
import { Role } from '../role';
import { User } from '../user';


@Component({
  selector: 'app-complaint-register',
  templateUrl: './complaint-register.component.html',
  styleUrls: ['./complaint-register.component.css']
})

export class ComplaintRegisterComponent implements OnInit {

  userDetails: any| User[];
  customer:User;
  role:Role
  category: Category[];

  complaintDetails: Complaint = {
    category: '',
    heading: '',
    details: '',
    address: '',
    pincode: '',
    fullname: '',
    complaintStatus: '',
    customer: new User
  }

  constructor(
    private complaintService:ComplaintService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.userDetails = this.activatedRoute.snapshot.data['complaintDetails'];

    // this.userDetails.forEach(
    //   x =>this.complaintDetails.customer.push(
    //     {complaintId : x.complaintId}//quantity default value given 1
    //     )
    //   );

      console.log(this.userDetails);
      console.log(this.complaintDetails);
  }

  public registerComplaint(comaplaintForm:NgForm){
    console.log(comaplaintForm.value);
    this.complaintService.regNewComplaint(comaplaintForm.value).subscribe(
      (resp) => {
        console.log(resp);
        this.router.navigate(['/customerHome']);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

}
 