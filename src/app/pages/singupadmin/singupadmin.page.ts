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
  FormBuilder,
  AbstractControl
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
    conPassword: string = "";

    navCtrl: any;

    public errorFeedback = {

      'restuarant_name': {
        'required': 'Restuarant name is required',
        'maxlength': 'Restuarant name cannot be longer than 50 characters',
        'minlength': 'Restuarant cannot be less than 2 characters'
      },
  
      'email_address': {
        'required': 'Email is required',
        'pattern': 'Please enter a valid email address'
      },
      'cellNo': {
        'required': 'Cellphone number is required',
        'pattern': 'Please enter a valid cellphone number'
      },
      'address': {
        'required': 'Physical address is required'
      },
      'password': {
        'required': 'Please enter password',
        'pattern': 'Password must be more than 8 characters'
      },
      'conPassword': {
        'required': 'Please enter confirm password'
      },
      'passwordGroup': {
        'notMatch': 'Password and confirm password do not match'
      }
  
  
    }
  
    formErrors = {
      'restuarant_name': '',
      'email_address': '',
      'cellNo': '',
      'address': '',
      'password': '',
      'conPassword': '',
      'passwordGroup': ''
  
    }

  constructor( public adminService: AdminService,
    private router: Router,
    private postPvdr: PostProvider,
    private actRoute:ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) { }

    msgTrue = false;
    addVendors: any = [];

    vendorReg = this.fb.group({
      restuarant_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email_address: ['', [Validators.required, Validators.pattern('[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      cellNo: ['', [Validators.required, Validators.pattern('(^0[123678][123456789][0-9]{7})')]],
      address: ['', Validators.required],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.pattern('[A-z].{8,}')]],
        conPassword: ['', [Validators.required]]
      }, { validator: matchPsw })
  
    })


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

 logValidationErrors(group: FormGroup = this.vendorReg): void {
  Object.keys(group.controls).forEach((key: string) => {
    const abstractControl = group.get(key);

    this.formErrors[key] = '';
    if (abstractControl && !abstractControl.valid &&
      (abstractControl.touched || abstractControl.dirty)) {
      const messages = this.errorFeedback[key];

      for (const errorKey in abstractControl.errors) {
        if (errorKey) {
          this.formErrors[key] += messages[errorKey] + ' ';
        }
      }
    }

    if (abstractControl instanceof FormGroup) {
      this.logValidationErrors(abstractControl);
    }
  });
}


}

function matchPsw(group: AbstractControl): { [key: string]: any } | null { //gets reference value from password group containing both pasword and confirm password
  const passwordControl = group.get('password');  //getting and assigning password
  const confirmPasswordControl = group.get('confirmPassword');  //getting and assigning confirm password

  if (passwordControl.value === confirmPasswordControl.value || (confirmPasswordControl.pristine)) //if statement compares password and confirm password
  {
    return null; //return null if passwords match
  }
  else {
    return { 'notMatch': true }; //return 'notMatch' if passwords do not match
  }

}