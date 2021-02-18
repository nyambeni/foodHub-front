
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../services/cart.service';

import { CartModalPage } from '../cart-modal/cart-modal.page';

import { ExtrasPage } from '../extras/extras.page';
import { PostProvider } from '../../../providers/post-provider';
import { Location } from '@angular/common';


import { NavController, NavParams, AlertController, ModalController, ActionSheetController , LoadingController} from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'app-order2',
  templateUrl: './order2.page.html',
  styleUrls: ['./order2.page.scss'],
})
export class Order2Page implements OnInit {

  menuItems: any[];
  limit = 10;
  start = 0;
  cart = [];
  product = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
  contentLoaded = false;
  // tslint:disable-next-line: max-line-length
  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController, private router: Router,
    private route: Router, public actionSheetController: ActionSheetController, private loadingCtrl: LoadingController, private dataService: DataService,
               private searchService: SearchService) {
                setTimeout(() => {
                  this.contentLoaded = true;
                }, 3000);
                }

                async presentActionSheet() {
                  const actionSheet = await this.actionSheetController.create({
                    header: 'Menu',
                    buttons: [{
                      text: 'Home',
                      role: 'destructive',
                      icon: 'home-outline',
                      handler: () => {
                        console.log('Home clicked');
                        this.route.navigateByUrl('home');
                      }
                    }, {
                      text: 'My Account',
                      icon: 'person-circle-outline',
                      handler: () => {
                        console.log('Myprofile clicked');
                        this.route.navigateByUrl('/custprof');
                      }
                    }, {
                      text: 'Restaurants',
                      icon: 'restaurant-outline',
                      handler: () => {
                        console.log('Restaurants clicked');
                        this.route.navigateByUrl('/restaurants');
                      }
                    }, {
                      text: 'My cart',
                      icon: 'cart-outline',
                      handler: () => {
                        console.log('My cart clicked');
                        this.route.navigateByUrl('/cart-modal');
                      }
                    },
                     {
                      text: 'Signup',
                      icon: 'person-add-outline',
                      handler: () => {
                        console.log('Signup clicked');
                        this.route.navigateByUrl('/signup');
                      }
                     },
                     {
                       text: 'Order',
                       icon: 'time-outline',
                       handler: () => {
                         console.log('Share clicked');
                         this.route.navigateByUrl('/order2');
                       }
                     },
                   {
                    text: 'login',
                    icon: 'person',
                    handler: () => {
                      console.log('login clicked');
                      this.route.navigateByUrl('/login');
                    }
                },
                    {
                     text: 'History',
                     icon: 'time-outline',
                     handler: () => {
                       console.log('Share clicked');
                       this.route.navigateByUrl('/profile');
                     }
                   }, {
                     text: 'Support',
                     icon: 'help-circle-outline',
                     handler: () => {
                       console.log('Share clicked');
                       this.route.navigateByUrl('/profile');
                     }
                   }, {
                     text: 'About Us',
                     icon: 'information-circle-outline',
                     handler: () => {
                       console.log('Share clicked');
                       this.route.navigateByUrl('/profile');
                     }
                   },
                      {
                       text: 'goto admin',
                       icon: 'help-circle-outline',
                       handler: () => {
                         console.log('admin clicked');
                         this.route.navigateByUrl('/vendor-admin');
                       }
                   }
                   ,
                      {
                       text: 'goto superadmin',
                       icon: 'help-circle-outline',
                       handler: () => {
                         console.log('super admin clicked');
                         this.route.navigateByUrl('/super-admin');
                       }
                   }, {
                      text: 'Cancel',
                      icon: 'close',
                      role: 'cancel',
             
                      handler: () => {
                        console.log('Cancel clicked');
                      }
                    }]
                  });
                  await actionSheet.present();
                }
                
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

  }

  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('tada');
  }

  async openCart() {
    this.animateCSS('bounceOutLeft', true);

    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }

}


