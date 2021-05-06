import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';


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

  dismiss() {
    this.editAdminCtrl.dismiss();
  }

}
