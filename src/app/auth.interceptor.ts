import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private lservice: LoginService) {}

    
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.lservice.getToken();
    console.log("INTERCEPTOR ", token)

    
    let authReq;

    if (this.lservice.isUserLoggedIn()) {
      authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer '+token
        })
      });
    } else {
      authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      });
    }
    console.log("*******")
    console.log(authReq)
    return next.handle(authReq);
  }
}