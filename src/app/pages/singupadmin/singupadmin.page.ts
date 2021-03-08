import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-singupadmin',
  templateUrl: './singupadmin.page.html',
  styleUrls: ['./singupadmin.page.scss'],
})
export class SingupadminPage implements OnInit {

    // tslint:disable-next-line: variable-name
    restuarant_id: number;
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: no-inferrable-types
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: quotemark
    // tslint:disable-next-line: no-inferrable-types
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: no-inferrable-types
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: no-inferrable-types
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: no-inferrable-types
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: quotemark
    restuarant_name: string = "";
    cellNo: string = "";
    address: string = "";
    password: string = "";
    email_address: string = "";
    rest_status: string = "";
    confirm: string = "";

  constructor( public adminService: AdminService,
    private router: Router,
    private postPvdr: PostProvider,
    private actRoute:ActivatedRoute,
    private location: Location) { }

    msgTrue = false;
    contantList : any;
  ngOnInit() {

this.adminService.getProfile().subscribe(data =>{
  this.contantList = data;
})

    this.actRoute.params.subscribe((data: any) => {

      this.restuarant_id = data.id;
      this.restuarant_name = data.name;
      this.password = data.password;
      this.email_address = data.e_address;
      this.rest_status = data.status;
      this.cellNo = data.phone;
      this.address = data.address;
      this.confirm = data.conP;
      console.log(data);

    });

  }

  goHome() {

  
   const newFormData = {restuarant_name:this.restuarant_name,
   address:this.address,
   email_address:this.email_address,
   cellNo:this.cellNo,
   password:this.password,
   confirm:this.confirm};

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

      this.router.navigateByUrl('/admin-login');

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

