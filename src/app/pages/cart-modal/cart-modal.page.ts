// import { Product, CartService } from '../../services/cart.service';
// import { Component, OnInit } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { ModalController, AlertController } from '@ionic/angular';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-cart-modal',
//   templateUrl: './cart-modal.page.html',
//   styleUrls: ['./cart-modal.page.scss'],
// })
// export class CartModalPage implements OnInit {

//   cart: Product[] = [];
//   qty = 0;
//   cartItemCount: BehaviorSubject<number>;
//   // tslint:disable-next-line: max-line-length
// tslint:disable-next-line: max-line-length
//   constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController, private router: Router) { }

//   ngOnInit() {
//     this.cart = this.cartService.getProducts();
//   }

//   decreaseCartItem(product) {
//     this.cartService.decreaseProduct(product);
//   }

//   increaseCartItem(product) {
//     this.cartService.addProduct(product);
//   }

//   removeCartItem(product) {
//     this.cartService.removeProduct(product);
//   }

//   getTotal() {
//     return this.cart.reduce((i, j) => i + j.price * j.qty, 0);
//   }

//   close() {
//     this.modalCtrl.dismiss();

//   }

//   carddetails() {
//     this.close();
//     this.router.navigate(['/stripe']);
//   }

// }

import { Product, CartService } from '../../services/cart.service';
import { Component, OnInit } from '@angular/core';


import { NavController, NavParams, AlertController, ModalController, ActionSheetController , LoadingController} from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] = [];

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
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
     this.close();
    // this.router.navigate(['/stripe']);
     const total =  this.cart.reduce((i, j) => i + j.price * j.amount, 0);
     this.router.navigate(['/stripe'], { queryParams: { total }});

  }

  async checkout() {
    // Perfom M-pesa, Mastercard, PayPal checkout process

    const cartCount =  this.cart.length;
    console.log('cart item count: ' + cartCount);

    this.cartService.clearCart();


    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Thanks for your Order!',
      message: 'We will deliver your chakula as soon as possible',
      buttons: ['SAWA']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
}
