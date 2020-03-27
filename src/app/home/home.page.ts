import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController ,LoadingController} from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
   // tslint:disable-next-line: max-line-length
   constructor(private route: Router,public actionSheetController: ActionSheetController,
               private loadingCtrl: LoadingController,private dataService: DataService,
               private searchService: SearchService) {}

   searchTerm: any = "";

   // this a function of the actionsheet  

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
           console.log('Play clicked');
           this.route.navigateByUrl('/restaurants');
         }
       }, {
         text: 'My cart',
         icon: 'cart-outline',
         handler: () => {
           console.log('Favorite clicked');
           this.route.navigateByUrl('/cart-modal');
         }
       },
        {
         text: 'Register as a Vendor',
         icon: 'person-add-outline',
         handler: () => {
           console.log('Favorite clicked');
           this.route.navigateByUrl('/signupadmin');
         }
       },
       {
        text: 'Register as a customer',
        icon: 'person-add-outline',
        handler: () => {
          console.log('Favorite clicked');
          this.route.navigateByUrl('/signupcust');
        }
      },   {
        text: 'Sign in',
        icon: 'person',
        handler: () => {
          console.log('Favorite clicked');
          this.route.navigateByUrl('/signin');
        }
      },{
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
      },{
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
      },{
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
  
/*
   //Loader controller function
   presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    \
  }*/

  // testing the admin data
  adminData: any =[];

  // search 
  // searchData: any = []; 
  jsonData: any = [];

  public getRest(){ // ive used the adminData here to test the connection. some of the variables should be change..pls dont touch
    return this.dataService.adminService().subscribe((data: any) => {this.adminData = data; console.log(this.adminData);});
  }

  ngOnInit() {
    this.getRest();
  }
  gotoRest(){
    this.route.navigateByUrl('/restaurants');
  }

  // search bar
  // --------------------------------------------------
  ionViewDidLoad() {
    this.setFilteredItems();
  }

  setFilteredItems() {
 
        this.jsonData = this.dataService.filterItems(this.searchTerm);
       // this.searchData = this.searchService.filterItems(this.searchTerm);
 
    }
// ------------------------------------------------------



    search(){
      this.dataService.jsonData.subscribe((dat: any) => {this.jsonData = dat; console.log(this.jsonData);});
     // return this.searchService.searchD().subscribe((dat: any) => {this.searchData = dat;console.log(this.searchData);});
    }

    slidesDidLoad(slides) {
      slides.startAutoplay();
    }
  


}
