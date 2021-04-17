import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: any;
  constructor(private http: HttpClient) { 
    this.token = window.sessionStorage.getItem('token');
  }

  isUserLoggedIn() {

    if (this.token) {
      console.log("isUserLoggedIn: returning true")
      
      return true;
    }
    console.log("isUserLoggedIn: returning false")
    return false;
  }

  getToken(){
    return this.token;
  }

  loginUser(formData: any): Observable<any> {
    /**console.log(formData);
    this.http.post<any>("http://localhost:8079/token", formData).subscribe(data => {
      console.log("DATA")
      console.log(data.token)
    })
    console.log(formData)**/
    window.sessionStorage.setItem('mail', formData.mail)
      return this.http.post<any>("http://localhost:8079/token", formData).
      pipe(tap(res => this.token = res.token))
      .pipe(tap(res => window.sessionStorage.setItem('token', this.token)))

  }

  logoutUser(): void {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('mail');
    this.token = null;
  }

}
