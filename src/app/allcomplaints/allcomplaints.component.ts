import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-allcomplaints',
  templateUrl: './allcomplaints.component.html',
  styleUrls: ['./allcomplaints.component.css']
})
export class AllcomplaintsComponent implements OnInit {

  pageNumber:number = 0;
  complaintdetails = [];
  constructor(
    private complaintService:ComplaintService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllComplaints();
  }

  getAllComplaints()
  {
    this.complaintService.getComplaintList()
    .subscribe(
      (resp: Complaint[]) => {
        console.log(resp);
        resp.forEach(c => this.complaintdetails.push(c));
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
