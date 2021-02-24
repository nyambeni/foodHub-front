import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http'; // step 1


@Injectable({
  providedIn: 'root'
})
export class AdminService { // class name
  profile_url = 'http://localhost:6000/admin';  // step 2 variable
  overview_url = 'http://localhost:3000/restu_register'; // check

  constructor(private httpClient: HttpClient) { }

  getProfile() { // this is a function


   const httpHeaders = new HttpHeaders();
   httpHeaders.append('content-type',"application/json");
    return this.httpClient.get(this.profile_url);
  }

  CreateProfile(createResource)
  {
    return this.httpClient.post(this.overview_url,createResource);
  }
}
// thats all you need inside the service.. now we are goin to use this service anywhere were it is required
