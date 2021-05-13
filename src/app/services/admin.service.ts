import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // step 1


@Injectable({
  providedIn: 'root'
})
export class AdminService { // class name
  profile_url = 'http://localhost:6000/admin';  // step 2 variable
  overview_url = 'http://localhost:6000/'; // check

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  getProfile() { // this is a function

    return this.http.get(this.profile_url);
=======

  public getProfile()
  {
    return this.http.get<any>(this.login_url);
  }


  public getShops() {
    return this.http.get<any>(this.shop_url);
  }


  updateShop(shopData:any) {
    return this.http.put('http://localhost:3000/restu_update/' + shopData.restuarant_id , shopData);
  } 
    //delete shop for superadmin

  removeShop(id:any) {
    // const id: number = 1;
    const _urldel = 'http://localhost:3000/restuarant/' + id;

    return this.http.delete(_urldel);
  
  }


  getVendor() {
    return this.http.get<any>(this. reg_url_shop);
  } 


   getUser() {
    return this.http.get<any>(this. reg_url_user);
  } 

  
  public createProfile(addven:any)
  {
    return this.http.post<any>(this. reg_url_shop, addven, {});
  }

   public createProfileUser(addven:any)
  {
    return this.http.post<any>(this. reg_url_user, addven, {});
>>>>>>> ea2e450c2aa66a21b9063ca99c9c34a56af9caa4
  }
}
// thats all you need inside the service.. now we are goin to use this service anywhere were it is required
