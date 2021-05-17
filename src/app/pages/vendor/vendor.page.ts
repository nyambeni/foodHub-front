import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AdminService} from 'src/app/services/admin.service';
import { EditVendorPage } from './edit-vendor/edit-vendor.page';
import { ViewVendorPage } from './view-vendor/view-vendor.page';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['./vendor.page.scss'],
})
export class VendorPage implements OnInit {

  shops = [
    {
      name:"Campus Eats",
      sales: 1000,
      address: "Soshanguve Campus",
      status: "Active"
    }

  ]

  constructor(private modalCtrl : ModalController,
              private _adminService: AdminService) { }

  ngOnInit() {

    this._adminService.getVendor()
        .subscribe(data => this.shops = data);

  }

  async  _openModal(shop) {

    const modal = await this.modalCtrl.create({
      component: ViewVendorPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

  async  _editModal(shop, index) {

    const modal = await this.modalCtrl.create({
      component: EditVendorPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

}
