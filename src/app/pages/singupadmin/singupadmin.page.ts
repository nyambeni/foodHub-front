import { Component, OnInit, Input  } from '@angular/core';
import { Location } from '@angular/common';
import {PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {AdminService} from 'src/app/services/admin.service';
import { NgModule, Pipe} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-singupadmin',
  templateUrl: './singupadmin.page.html',
  styleUrls: ['./singupadmin.page.scss'],
})
export class SingupadminPage implements OnInit {

  //  restuarant_name:string;
    //cellNo: string ;
   // address: string ;
  //  password: string;
    //email_address: string ;

   // rest_status: string = "";
    //conPassword: string = "";

  /* venData = { restuarant_id:" ",
    restuarant_name:"",
    cellNo: "",
    address: "",
    password: "",
    email_address:  "",
    rest_status: " ",
    confirm:  " "};*/

    restuarant_name:string= "";
    cellNo: string = "";
    address: string = "";
    password: string= "" ;
    email_address: string ;
   // rest_status: string = "";
    //conPassword: string = "";

    navCtrl: any;

  constructor( public adminService: AdminService,
    private router: Router,
    private postPvdr: PostProvider,
    private actRoute:ActivatedRoute,
    private location: Location) { }

    msgTrue = false;
    addVendors: any = [];
  ngOnInit() {
this.getVendors();

  }

  getVendors()
  {
    this.adminService.createProfile(this.addVendors).subscribe((data: any)=>
    {this.addVendors=data;
    console.log(this.addVendors);

    });

  }

  goHome() {

    const newFormData = {restuarant_name:"KingKotas",
    address:"21477 Aubrey Matlala",
    email_address:"KotasKings@gmail.com",
    cellNo:"0123426583",
    password:"KingsKotas",
    confirm:"KingsKotas"};
 
 //Dynamic data from form
    //this.restuarant_name = resturant_name;
    // console.log(form.value.address);
    // console.log(form.value.email_address);
    // console.log(form.value.cellNo);
    // console.log(form.value.password);
    // console.log(form.value.confirm);
 
 
     this.adminService.createProfile(newFormData).subscribe(data => {
       this.msgTrue =true;
       console.log(data);
     });

   /* this.adminService.createProfile(this.addVendors).subscribe(
      data =>
      console.log(data));*/
      
  /*
      console.log(this.venData.restuarant_name);
      console.log(this.venData.cellNo);
      console.log(this.venData.address);
      console.log(this.venData.email_address);
      console.log(this.venData.password,);*/
      
  /*
  //mock data
   const newFormData = {restuarant_name:"king kots",
   address:"213 hhenna street",
   email_address:"KingKotas@gmail.com",
   cellNo:"0123456873",
   password:"KotasKing@2021",
   confirm:"KotasKing@2021"};*/

//Dynamic data from form
   //this.restuarant_name = resturant_name;
   // console.log(form.value.address);
   // console.log(form.value.email_address);
   // console.log(form.value.cellNo);
   // console.log(form.value.password);
   // console.log(form.value.confirm);


    /*this.adminService.createProfile(newFormData).subscribe(data => {
      this.msgTrue =true;
      console.log(data);
    });
*/
    return this.router.navigateByUrl('/admin-login');

 }

 navAdmin() {
  return this.router.navigateByUrl('/vendor-admin');
}
 btnClear() {

}
// back button
backButton() {
  this.location.back();
 }


}

