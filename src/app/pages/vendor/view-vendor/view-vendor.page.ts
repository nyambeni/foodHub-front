import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.page.html',
  styleUrls: ['./view-vendor.page.scss'],
})
export class ViewVendorPage implements OnInit {

  shop:any;

  constructor(private viewVendorCtrl : ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewVendorCtrl.dismiss()
  }

}