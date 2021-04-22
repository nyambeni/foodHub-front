import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-driver-order',
  templateUrl: './driver-order.page.html',
  styleUrls: ['./driver-order.page.scss'],
})
export class DriverOrderPage implements OnInit {

  order: any;

  constructor(private viewDriverOrderCtrl: ModalController, private navParams: NavParams) {

    this.order = navParams.get

   }


  ngOnInit() {
  }

  dismiss() {
    this.viewDriverOrderCtrl.dismiss();
  }

}
