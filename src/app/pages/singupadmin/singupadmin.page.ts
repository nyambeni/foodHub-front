import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Form} from '@angular/forms';
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
    form: FormControl;
createProf :any = {};
  constructor(
    public adminService: AdminService,
    private router: Router,
    private postPvdr: PostProvider,
    private actRoute:ActivatedRoute,
    private location: Location
   ) 
   { }

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

  goHome(form) {

  
  /* const newFormData = {restuarant_name:"kotajoy",
   address:"332 heah",
   email_address:"kayy@gmai",
   cellNo:"0124587965",
   password:"1122336655"};*/
console.log(form.value.restuarant_name);
console.log(form.value.address);
console.log(form.value.email_address);
console.log(form.value.cellNo);
console.log(form.value.password);

//Dynamic data from form
   const newFormData =  {
     restuarant_name:form.value.restuarant_name,
      address:form.value.address,
    email_address:form.value.email_address,
     cellNo:form.value.cellNo,
      password: form.value.password,
      confirm: form.value.confirm
   };


// const newFormData = {
   // 'restuarant_name':this.form.controls.restuarant_name.value,
   //  address:form.value.address,
    // email_address:form.value.email_address,
    // cellNo:form.value.cellNo,
   //  password: form.value.password,
   //  confirm: form.value.confirm
 


   this.adminService.createProfile(newFormData).subscribe(data => {
     
      console.log(data);
      this.msgTrue =true;
    });

     return  this.router.navigateByUrl('/admin-login');

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

