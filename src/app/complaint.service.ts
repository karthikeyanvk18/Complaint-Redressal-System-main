import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from './complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  PATH_API = "http://localhost:8080";

  constructor(
    private httpClient:HttpClient
  ) { }

public regNewComplaint(registerData){
  return this.httpClient.post(this.PATH_API+'/add/new/complaint',registerData);
}

public deleteComplaint(complaintId){
  return this.httpClient.delete(this.PATH_API+'/delete/complaint/'+complaintId);
}

public getComplaintList():Observable<Complaint[]>{
  return this.httpClient.get<Complaint[]>(this.PATH_API+'/get/complaint/list');
}

public markAsResolved(complaintId){
  return this.httpClient.get(this.PATH_API+'/markAsResolved/'+complaintId);
}

public markAsWip(complaintId){
  return this.httpClient.get(this.PATH_API+'/markAsWip/'+complaintId);
}

public markAsInReview(complaintId){
  return this.httpClient.get(this.PATH_API+'/markAsInReview/'+complaintId);
}

public getComplaintById(complaintId){
  return this.httpClient.get(this.PATH_API+'/getComplaintById/'+complaintId);
}

public getMyComplaints(): Observable<Complaint[]>{
  return this.httpClient.get<Complaint[]>(this.PATH_API+'/get/mycomplaints');
}

public getComplaintListEngg():Observable<Complaint[]>{
  return this.httpClient.get<Complaint[]>(this.PATH_API+'/get/complaint/list/engineer');
}

}
