import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import {AdminService} from 'src/app/services/admin.service';
import { ViewVendorPage } from './view-vendor/view-vendor.page';
import { EditVendorPage } from './edit-vendor/edit-vendor.page';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})
export class SuperAdminPage implements OnInit {


  shopDatas:any = [];

  constructor(private modalCtrl: ModalController,
              private _adminService: AdminService,
              private alertModal: AlertController,
              private infoToast: ToastController) { }

  ngOnInit() {

    //calling service on initial load to show all shops in database

     this._adminService.getShops()
        .subscribe(data => this.shopDatas = data);
        console.log(this.shopDatas);

  }

  

  //toast to confirm deleted item

  async showToast(shopDatas) {
    const toast = await this.infoToast.create({
      message: shopDatas.restuarant_name + ' has been deleted',
      duration: 1500
    });
    toast.present();
  }
  

  //alert to confirm deletion of shop

  async presentAlertConfirm(shopData) {
    const alert = await this.alertModal.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Are you sure you want to delete ' + shopData.restuarant_name + ' ?</strong>' ,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {

              //service called to delete shop

              this._adminService.removeShop(shopData.id)
              .subscribe(data => {
                console.log(data);
              });
          
              // calling toast to show item has been deleted

              this.showToast(shopData);
          }
        }
      ]
    });

    await alert.present();
  }

  //opens modal to create page to view shop

  async  _openModal(shopData) {

    const modal = await this.modalCtrl.create({
      component: ViewVendorPage,
      componentProps: {
        shopData: shopData
      }
    });

    return await modal.present();

  }

  //opens modal to edit page to change shop attibutes

  async  _editModal(shopData) {

    const modal = await this.modalCtrl.create({
      component: EditVendorPage,
      componentProps: {
        shopData: shopData
      }
    });

    return await modal.present();

  }

}
