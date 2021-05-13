import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.page.html',
  styleUrls: ['./edit-vendor.page.scss'],
})
export class EditVendorPage implements OnInit {

  shopData:any;

  constructor(private editAdminCtrl : ModalController,
    private infoToast : ToastController,
    private _adminService : AdminService) { }

  ngOnInit() {
  }

  async showToast(shopData) {
    const toast = await this.infoToast.create({
      message: 'Your settings have been saved for: ' + shopData.restuarant_name,
      duration: 1500
    });
    toast.present();
  }

  update() {

    this._adminService.updateShop(this.shopData)
        .subscribe(data => this.shopData = data);

    this.editAdminCtrl.dismiss()
    
  }

  dismiss() {
    this.editAdminCtrl.dismiss();
  }

}
