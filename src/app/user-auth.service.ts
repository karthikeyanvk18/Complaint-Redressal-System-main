import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  public setRoles(roles:[]){
    //array type roles [] has to be convert into string to store it into data storage that can be done by JSON.stringify
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  //localStorage.getItem("roles")-->return string, but to get array type return use JSON.parse
  public getRoles():[]{
    return JSON.parse(localStorage.getItem("roles"));
  }

  public setToken(jwtToken:string){
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken() : string{
    return localStorage.getItem("jwtToken");
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }

  public isAdmin(){
    const roles: any[] = this.getRoles();
    return roles[0].roleName === 'Admin';
  }

  public isCustomer(){
    const roles: any[] = this.getRoles();
    return roles[0].roleName === 'Customer';
  }

  public isManager(){
    const roles: any[] = this.getRoles();
    return roles[0].roleName === 'Manager';
  }

  public isEngineer(){
    const roles: any[] = this.getRoles();
    return roles[0].roleName === 'Engineer';
  }

}
