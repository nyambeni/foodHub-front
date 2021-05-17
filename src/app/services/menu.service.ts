import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

 

  constructor(private  http:HttpClient) { }

  menu_get = 'http://localhost:3000/';
  menu_send = 'http://localhost:3000/new_products';

 public getMenu()
  {
    return this.http.get<any>(this.menu_get);
  }
 
  
  public createMenus(addmenu:any)
  {
    return this.http.post<any>(this. menu_send, addmenu, {});
  }
}

