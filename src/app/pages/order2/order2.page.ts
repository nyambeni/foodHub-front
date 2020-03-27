
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';

import { ExtrasPage } from '../extras/extras.page';

import { Location } from '@angular/common';


@Component({
  selector: 'app-order2',
  templateUrl: './order2.page.html',
  styleUrls: ['./order2.page.scss'],
})
export class Order2Page implements OnInit {

  cart = [];
  product = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart',{static:false,read: ElementRef})fab: ElementRef;

  constructor(private cartService: CartService, private modalCtrl: ModalController, private location: Location) { }

  ngOnInit() {
    this.product = this.cartService.getProduct();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product){
    this.animateCSS('tada');
    this.cartService.addProduct(product);
  }
  exProduct(product){
    this.cartService.extraProd(product);
  }
  async openCart(){
    this.animateCSS('bounceOutLeft',true);
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated','bounceOutLeft')
      this.animateCSS('bounceLeft');
    });
    modal.present();
  }

  async openExtras(){
    let modal = await this.modalCtrl.create({
      component: ExtrasPage,
      cssClass: 'extras'
    });
    modal.present();
    
  }

  animateCSS(animationName, keepAnimated = false){
    const node = this.fab.nativeElement;
    node.classList.add('animated',animationName)

    function handleAnimationEnd(){
      if(!keepAnimated){
        node.classList.remove('animated',animationName);
      }
      node.removeEventListener('animationend',handleAnimationEnd)
    }
    node.addEventListener('animationend',handleAnimationEnd)
  }

//back button
backButton(){
  this.location.back();
 }

}
