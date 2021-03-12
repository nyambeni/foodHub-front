/*import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceproviderService {

   // tslint:disable-next-line: variable-name
   // tslint:disable-next-line: variable-name
   reg_URL = 'http://localhost:3000/cust_register';
  
   login_Url = 'http://localhost:3000/cust_login';
   result: any;
   responseData: any;

  // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: max-line-length
  constructor(private httpClient: HttpClient) { }
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: ban-types
  // tslint:disable-next-line: variable-name
  getUser()
{
  const headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.httpClient.get(this.login_Url);
}

createUser(createResource)
{
return this.httpClient.post(this.reg_URL,createResource);
}

  //loginData(email: string , password: string) {
   // return this.http.get('${this.login_Url}?email=${email}&password').pipe(map(results => {
    // localStorage.setItem('userdata', JSON.stringify(this.result));
    // this.router.navigate(['/home']);
   // }));
 // }
}
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceproviderService {

   // tslint:disable-next-line: variable-name
   // tslint:disable-next-line: variable-name
   reg_URL = 'http://localhost:3000/cust_register';
  
   login_Url = 'http://localhost:3000/cust_login';
   result: any;
   responseData: any;

  // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: max-line-length
  constructor(private httpClient: HttpClient) { }
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: ban-types
  // tslint:disable-next-line: variable-name
  getUser()
{
  const headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.httpClient.get(this.login_Url);
}

createUser(createResource)
{
return this.httpClient.post(this.reg_URL,createResource);
}

  //loginData(email: string , password: string) {
   // return this.http.get('${this.login_Url}?email=${email}&password').pipe(map(results => {
    // localStorage.setItem('userdata', JSON.stringify(this.result));
    // this.router.navigate(['/home']);
   // }));
 // }
}
