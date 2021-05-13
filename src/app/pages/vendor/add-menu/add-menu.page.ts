import { Component, OnInit } from '@angular/core';
import {PostProvider } from '../../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})

export class AddMenuPage implements OnInit {

<<<<<<< HEAD
  // tslint:disable-next-line: variable-name
  item_name = '';
  // tslint:disable-next-line: variable-name
  item_description = '';
  // tslint:disable-next-line: variable-name
  item_price = '';
  itemStatus = '';
=======
 
  product_name:string = '';
 
  product_description:string = '';

  product_price:string = '';
 
>>>>>>> ea2e450c2aa66a21b9063ca99c9c34a56af9caa4
  id: number;

  constructor(

    private router: Router,
    private postPvdr: PostProvider,
    private actRoute: ActivatedRoute

    ) { }

  ngOnInit() {

    this.actRoute.params.subscribe((data: any) => {

      this.id = data.id;
<<<<<<< HEAD
      this.item_name = data.name;
      this.item_description = data.description;
      this.item_price = data.price;
      this.itemStatus = data.status;
=======
      this.product_name = data.product_name;
      this.product_description =this.product_description;
      this.product_price = data.product_price;
      
>>>>>>> ea2e450c2aa66a21b9063ca99c9c34a56af9caa4
      console.log(data);
    });

  }

  createdProses() {
    return new Promise(resolve => {

      const body = {

        aksi: 'add',
<<<<<<< HEAD
        item_name : this.item_name,
        item_description : this.item_description,
        item_price: this.item_price,
        itemStatus: this.itemStatus,
=======
        product_name : this.product_name,
        product_description : this.product_description,
        product_price: this.product_price,
        category: this.category,
      };
      this.menuService.createMenus(body).subscribe(data => {
        console.log(data);
      });
      });*/


      return new Promise(resolve => {

      const body = {

        aksi: 'add',
        product_name : this.product_name,
        product_description : this.product_description,
        product_price: this.product_price,
        
       
>>>>>>> ea2e450c2aa66a21b9063ca99c9c34a56af9caa4
      };
      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        this.router.navigate(['menu']);
        console.log('submit works');
      });

    });

  }

  updateProses() {
        return new Promise(resolve => {
        const body = {
        aksi: 'update',
        item_id: this.id,
        item_name: this.item_name,
        item_description: this.item_description,
        item_price: this.item_price,
        itemStatus: this.itemStatus,

      };

        this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

        this.router.navigate(['menu']);
        console.log('submit works');

      });

    });

  }

}
