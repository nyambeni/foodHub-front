import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NavController, NavParams, AlertController, ModalController, ActionSheetController , LoadingController} from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'app-custprof',
  templateUrl: './custprof.page.html',
  styleUrls: ['./custprof.page.scss'],
})
export class CustprofPage implements OnInit {
  contentLoaded = false;
  // tslint:disable-next-line: max-line-length
  constructor(private location: Location, private modalCtrl: ModalController, private alertCtrl: AlertController, private router: Router,
    private route: Router, public actionSheetController: ActionSheetController, private dataService: DataService,
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
  }
  back(){
    this.location.back();
  }

}
