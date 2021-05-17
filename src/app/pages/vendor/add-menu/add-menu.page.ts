import { Component, OnInit } from '@angular/core';
import {PostProvider } from '../../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import {MenuService} from 'src/app/services/menu.service';
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})

export class AddMenuPage implements OnInit {

 
  product_name:string = '';
 
  product_description:string = '';

  product_price:string = '';
 
  id: number;

  constructor(
    public menuService: MenuService,
    private router: Router,
    private postPvdr: PostProvider,
    private actRoute: ActivatedRoute

    ) { }

  ngOnInit() {

    this.actRoute.params.subscribe((data: any) => {

      this.id = data.id;
      this.product_name = data.product_name;
      this.product_description =this.product_description;
      this.product_price = data.product_price;
      
      console.log(data);
    });

    
  }

  createdMenu() {
    /** 
    return new Promise(resolve => {

      const body = {

        aksi: 'add',
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
        
       
      };
      this.menuService.createMenus(body).subscribe(data => {
        console.log(data);

      });
     
      });

    }

  

  /*updateMenu() {
        return new Promise(resolve => {
        const body = {
        aksi: 'update',
        item_id: this.id,
        item_name: this.item_name,
        item_description: this.item_description,
        item_price: this.item_price,
        itemStatus: this.itemStatus,

      };

      this.menuService.createMenu(body).subscribe(data => {
        console.log(data);
      });
      });

    });

  }
*/
}
