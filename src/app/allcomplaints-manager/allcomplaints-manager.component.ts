import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-allcomplaints-manager',
  templateUrl: './allcomplaints-manager.component.html',
  styleUrls: ['./allcomplaints-manager.component.css']
})
export class AllcomplaintsManagerComponent implements OnInit {

  asignedTo:string;
  complaintdetails:any|Complaint[];
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

  wip(complaintId){
    this.complaintService.markAsWip(complaintId);
    this.getAllComplaints();
  }
  Reviewed(complaintId){
    this.complaintService.markAsInReview(complaintId);
    this.getAllComplaints();
  }
  Resolved(complaintId){
    this.complaintService.markAsResolved(complaintId);
    this.getAllComplaints();
  }
}
