import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private  http:HttpClient) { }

  res_get = 'http://localhost:3000/allrestuarant';

res_send = 'http://localhost:3000/allrestuarant';

 public getRestu()
  {
    return this.http.get<any>(this.res_get);
  }
 
  
  public createRes(addres:any)
  {
    return this.http.post<any>(this. res_send, addres, {});
  }
}
