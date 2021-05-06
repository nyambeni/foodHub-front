import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-shop-page',
  templateUrl: './edit-shop.page.html',
  styleUrls: ['./edit-shop.page.scss'],
})
export class EditShopPage implements OnInit {

  shops: any = [] ;

  constructor(private editShopCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.editShopCtrl.dismiss(this.shops)
  }

}
