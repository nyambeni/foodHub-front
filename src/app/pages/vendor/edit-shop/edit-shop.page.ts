import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.page.html',
  styleUrls: ['./edit-shop.page.scss'],
})
export class EditShopPage implements OnInit {

  constructor(private editAdminCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.editAdminCtrl.dismiss();
  }

}
