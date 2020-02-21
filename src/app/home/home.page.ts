import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  constructor(private route: Router) {

   }


  ngOnInit() {
  }
  gotoRest(){
    this.route.navigateByUrl('/restaurants');
  }

}
