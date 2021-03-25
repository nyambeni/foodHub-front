import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.page.html',
  styleUrls: ['./view-vendor.page.scss'],
})
export class ViewVendorPage implements OnInit {

  vendor:any;

  constructor(navParams: NavParams, private viewVendorCtrl: ModalController) {

    this.vendor = navParams.get('');

   }

  ngOnInit() {
  }

  dismiss() {
    this.viewVendorCtrl.dismiss();
  }

}


