import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'; // step 1
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService { // class name
  profile_url = 'http://localhost:3000/restu_register';  
  overview_url = 'http://localhost:6000/'; // check

  constructor(private httpClient: HttpClient) { }

getProfile()
{
  const headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.httpClient.get(this.overview_url);
}

createProfile(createResource)
{
return this.httpClient.post(this.profile_url,createResource);
}

//getRequestOptions(): RequestOptions {
//  const options = new RequestOptions();
 // options.headers = this.getProfile(); 

 // return options;
//}

 // get(url:string) { // this is a function

   // return this.http.get(url,this.getRequestOptions());
 // }

 // post(url:string, data:any) { // this is a function

    //return this.http.post(url,data, this.getRequestOptions());
 // }
}
// thats all you need inside the service.. now we are goin to use this service anywhere were it is required
