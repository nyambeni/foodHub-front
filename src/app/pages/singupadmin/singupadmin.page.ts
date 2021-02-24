import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {PostProvider } from '../../../providers/post-provider';

import { Router, ActivatedRoute } from '@angular/router';
import {AdminService} from 'src/app/services/admin.service';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    restuarant_name: string;
    contact: string;
    address_loc: string;
    pass_word: string;
    email_address: string;
    rest_status: string;
    conPassword: string;

    form: FormGroup;

  constructor(
    public adminService:AdminService,
    private router: Router,
    private postPvdr: PostProvider,
    private actRoute:ActivatedRoute,
    private location: Location,
    public formbuilder: FormBuilder,
    public http: httpClient) { 
      this.form = this.formbuilder.group({
        
      })
    }

    msgTrue = false;
    adminProfile: any;


  ngOnInit() {

    this.actRoute.params.subscribe((data: any) => {

      this.restuarant_id = data.id;
      this.restuarant_name = data.name;
      this.pass_word = data.password;
      this.email_address = data.e_address;
      this.rest_status = data.status;
      this.contact = data.phone;
      this.address_loc = data.address;
      this.conPassword = data.conP;
      console.log(data);

      this.adminService.getProfile().subscribe(data =>{
        this.adminProfile=data;
      });

    });

  }

  goHome()
   {

        const formData = new FormData();


        // restuarant_name:form.value.restuarant_name,
        // email_address:form.value.email_address,
        // contact:form.value.contact, 
        // address_loc:form.value.address_loc,
        // pass_word:form.value.pass_word,
        // pass_word:form.value.conPassword

        formData.append ("restuarant_name", this.form.get('restuarant_name').value);
        formData.append ("email_address", this.form.get('email_address').value);
        formData.append ("contact", this.form.get('contact').value);
        formData.append (" address_loc", this.form.get(' address_loc').value);
        formData.append ("pass_word", this.form.get('pass_word').value);
        formData.append ("pass_word", this.form.get('conPassword').value);

        


         console.log(form.value.restuarant_name);
         console.log(form.value.email_address);
        console.log(form.value.contact);
        console.log(form.value.address_loc);
       console.log(form.value.pass_word);
         console.log(form.value.conPassword);


        this.adminService.CreateProfile(newFormData).subscribe(data => {
          console.log(data);
          this.msgTrue =true;
        });
     /*  return new Promise(resolve => {

        const body = {

          aksi: 'add-restInfo',
          restuarant_name: this.restuarant_name,
          pass_word: this.pass_word,
          email_address: this.email_address,
          rest_status: this.rest_status,
          contact: this.contact,
          address_loc: this.address_loc,
          conPassword: this.conPassword,

        };
        this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        this.router.navigateByUrl('/login');
        console.log('submit works');

        });

      });
        */
      this.router.navigate('/admin-login');

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