import { Component, OnInit } from '@angular/core';
import { Product, CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController,private router: Router){}

  ngOnInit() {
    this.cart = this.cartService.getCart();

    this.cartService.disableCheckout();
    
  }

  decreaseCartItem(product){
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product){
    this.cartService.addProduct(product);
  }

  removeCartItem(product){
    this.cartService.removeProduct(product);
  }

  getTotal(){
    return this.cart.reduce((i,j) => i + j.price * j.amount, 0);
  }

  close(){
    this.modalCtrl.dismiss();
  }

  checkout(){
    this.router.navigate(['checkout']);
    /*disable button if cart is empty
      clear all*/
    
  }

  
  

}
