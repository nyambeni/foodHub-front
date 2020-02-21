import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
 order(){
   this.route.navigateByUrl('/order2');
 }
 secOrder(){
   this.route.navigateByUrl('/order');
 }
 thirdOrder(){
   this.route.navigateByUrl('/order3');
 }
}
