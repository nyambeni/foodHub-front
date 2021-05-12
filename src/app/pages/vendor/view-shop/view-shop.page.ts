import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-shop',
  templateUrl: './view-shop.page.html',
  styleUrls: ['./view-shop.page.scss'],
})
export class ViewShopPage implements OnInit {

  constructor(private viewShopCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewShopCtrl.dismiss();
  }


}
