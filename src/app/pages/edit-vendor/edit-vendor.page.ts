import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.page.html',
  styleUrls: ['./edit-vendor.page.scss'],
})
export class EditVendorPage implements OnInit {

  vendor: any ;

  constructor(private editVendorCtrl : ModalController) { }

  ngOnInit() {
  }

  update()
  {
    this.editVendorCtrl.dismiss(this.vendor);

  }
  

}
