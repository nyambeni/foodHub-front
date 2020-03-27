import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  jsonData: any; // search bar purpose

  constructor(private http: HttpClient) {
    // data for testing searchbar, this will be deleted !!!
    this.jsonData = [
      {id: 1, label: 'saw', name: 'Sephahlo'},
      {id: 2, label: 'saw1', name: 'Mogodu'},
      {id: 3, label: 'saw2', name: 'malana'},
      {id: 3, label: 'saw2', name: 'Gowdaman'},
      {id: 3, label: 'saw2', name: 'Neethi'},
      {id: 3, label: 'saw2', name: 'abirami1'},
      {id: 3, label: 'saw2', name: 'abirami2'},
      {id: 3, label: 'saw2', name: 'Harrish'},
      {id: 3, label: 'saw2', name: 'Lokesh'},
      {id: 3, label: 'saw2', name: 'Deepak'},
      {id: 3, label: 'saw2', name: 'malliga'},
      {id: 3, label: 'saw2', name: 'malliga'}

      ];

   }


  reg_url = '';
  log_url = '';
  show_rest_url = '';
  prof_url = '';
  admin_prof_url = 'http://168.172.185.4:6000/admin';
  logged =  0;

  adminService() {
    return this.http.get<any>(this.admin_prof_url);
  }

  // this was used for testing the search bar
  filterItems(searchTerm) {

    return this.jsonData.filter((item) => {
         return item.name.toLowerCase().includes(searchTerm.toLowerCase());
     });

 }
 loginUser(user) {

    return this.http.post<any>(this.admin_prof_url + '_login', user);
  }

  loggedIn() {
      
    return !!localStorage.getItem('token');
  }

getToken(){
    return localStorage.getItem('token');
  }

}
