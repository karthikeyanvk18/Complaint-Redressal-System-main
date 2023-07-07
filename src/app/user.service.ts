import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_API = "http://localhost:8080";
  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );

  constructor(
    private httpClient: HttpClient,
    private userAuthService: UserAuthService
  ) { }

  public getAllUsers(){
    return this.httpClient.get(this.PATH_API + "/allUser");
  }

  //this.httpClient.post(here url to api be called)
  public login(LoginData) {
    return this.httpClient.post(this.PATH_API + "/authenticate", LoginData, { headers: this.requestHeader });
  }

  public forCustomer(){
    return this.httpClient.get(this.PATH_API + '/forCustomer', {responseType:'text'});
  }

  public forAdmin(){
    return this.httpClient.get(this.PATH_API + '/forAdmin', {responseType:'text'});
  }

  public forManager(){
    return this.httpClient.get(this.PATH_API + '/forManager', {responseType:'text'});
  }

  public forEngineer(){
    return this.httpClient.get(this.PATH_API + '/forEngineer', {responseType:'text'});
  }

  //roleMatch(allowedRoles) allowedRoles(roles specified to user in db)--> will be matched with actual roles-->stored in datastorage if matched-->return isMatch true
  
  public roleMatch(allowedRoles): boolean { 
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {

          if (userRoles[i].roleName == allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          }
          else {
            return isMatch;
          }

        }
      }
    }

  }

  //for new customer registration open to all
  public customerRegister(registerData){
    return this.httpClient.post(this.PATH_API+'/registerNewCustomer', registerData);
  }

  //for new engineer registration only allowed fro admin
  public engineerRegister(registerData){
    return this.httpClient.post(this.PATH_API+'/registerNewEngineer', registerData);
  }

  //for new manager registration only allowed for admin
  public managerRegister(registerData){
    return this.httpClient.post(this.PATH_API+'/registerNewManager', registerData);
  }

  public deleteUser(userName:string){
    return this.httpClient.delete(this.PATH_API+'/deleteUser/'+userName);
  }


// public getUserByUserName(userName:string){
//   return this.httpClient.get<User>(this.PATH_API+'/getUserById/'+ userName);
// }

}
