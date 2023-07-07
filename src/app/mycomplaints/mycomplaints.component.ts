import { Component, OnInit } from '@angular/core';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-mycomplaints',
  templateUrl: './mycomplaints.component.html',
  styleUrls: ['./mycomplaints.component.css']
})
export class MycomplaintsComponent implements OnInit {

  mycomplaints:Complaint[];
  constructor(
    private complaintService:ComplaintService
  ) { }

  ngOnInit(): void {
    this.getMyComplaints();
  }

  getMyComplaints(){
    this.complaintService.getComplaintList().subscribe(
      (resp: Complaint[]) => {
        console.log(resp);
        this.mycomplaints = resp;
      },
      (err) => {
        console.log(err);
        }

    )
    
  }

}
