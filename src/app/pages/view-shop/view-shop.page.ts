import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-view-shop-page',
  templateUrl: './view-shop.page.html',
  styleUrls: ['./view-shop.page.scss'],
})
export class ViewShopPage implements OnInit {

  shops :any;

  constructor(private viewShopCtrl : ModalController,
              private navParams : NavParams) {
    this.shops = navParams.get('');
   }

  ngOnInit() {
  }

  dismiss(){
    this.viewShopCtrl.dismiss();
  }

}
