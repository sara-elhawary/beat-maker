import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient, private router:Router) { }
  login( userLogin: {email:string, password:string})
  {
    return this.httpClient.post('http://localhost:3000/users/login', userLogin)
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['home'])
  }

  isLoggedIn( )
  {
    
      return true;
   
  }

}
