import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Complaint } from './complaint';
import { ComplaintService } from './complaint.service';


@Injectable({
    providedIn: 'root'
  })

  export class ComplaintResolverService implements Resolve<Complaint>{

    constructor(
        private complaintService:ComplaintService
      ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Complaint[]| Observable <Complaint[]>|Promise<Complaint[]> |any {
        //throw new Error('Method not implemented.');
        const id = route.paramMap.get("id");
        return this.complaintService.getComplaintById(id)
        .pipe(
          map(
            (X : Complaint[], i) => X.map((complaint :  Complaint) => (complaint))
          )
        ); 
      }
       
    }
    
  