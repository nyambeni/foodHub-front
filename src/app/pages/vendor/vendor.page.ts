import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AdminService} from 'src/app/services/admin.service';
import { EditShopPage } from './edit-shop/edit-shop.page';
import { ViewShopPage } from './view-shop/view-shop.page';



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
      component: ViewShopPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

  async  _editModal(shop, index) {

    const modal = await this.modalCtrl.create({
      component: EditShopPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

}
