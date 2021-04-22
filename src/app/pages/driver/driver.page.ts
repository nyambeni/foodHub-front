import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DriverOrderPage } from 'src/app/pages/driver-order/driver-order.page';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {

  orders = [
    {
      vendor: "Nandos Soshanguve",
      dropoff: "Soshanguve",
      status: "Ready"
    },
    {
      vendor: "MacDees Ga-Rankuwa",
      dropoff: "Ga-Rankuwa",
      status: "Ready"
    }
  ]

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async  _openModal(order) {

    const modal = await this.modalCtrl.create({
      component: DriverOrderPage,
      componentProps: {
        order: order
      }
    });

    return await modal.present();

  }

}
