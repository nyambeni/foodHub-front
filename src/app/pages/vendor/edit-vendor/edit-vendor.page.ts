import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.page.html',
  styleUrls: ['./edit-vendor.page.scss'],
})
export class EditVendorPage implements OnInit {

  shop:any;

  constructor(private editVendorCtrl: ModalController,
              private infoToast: ToastController,
              private _adminService: AdminService) { }

  ngOnInit() {

  this._adminService.updateShop(this.shop)
  .subscribe(data => this.shop = data);

  }

  async showToast() {
    const toast = await this.infoToast.create({
      message: 'Your settings have been saved',
      duration: 1000
    });
    toast.present();
  }

  update() {
    this.editVendorCtrl.dismiss() //dont forget to add this.vendor
  }

}
