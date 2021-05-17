import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl
} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import {PostProvider } from '../../../providers/post-provider';
import { ServiceproviderService } from 'src/app/services/serviceprovider.service';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-singupcust',
  templateUrl: './singupcust.page.html',
  styleUrls: ['./singupcust.page.scss'],
})
export class SingupcustPage implements OnInit {

  name: string = "";
  surname: string = "";
  cell_no: number;
  address: string="";
  email_address: string = "";
  password: string = "";
 
  confirm_password: string = "";

  public errorFeedback = {

    'name': {
      'required': 'Name is required',
      'maxlength': 'Name cannot be longer than 50 characters',
      'minlength': 'Name cannot be less than 2 characters'
    },

    'surname': {
      'required': 'Surname is required',
      'maxlength': 'Surname cannot be longer than 50 characters',
      'minlength': 'Surname cannot be less than 2 characters'
    },
    'cell_no': {
      'required': 'Cellphone number is required',
      'pattern': 'Please enter a valid cellphone number'
    },
    'address': {
      'required': 'Physical address is required'
    },
    'email_address': {
      'required': 'Email is required',
      'pattern': 'Please enter a valid email address'
    },
    'password': {
      'required': 'Please enter password',
      'pattern': 'Password must be more than 8 characters'
    },
    'confirm_password': {
      'required': 'Please enter confirm password'
    },
    'passwordGroup': {
      'notMatch': 'Password and confirm password do not match'
    }


  }

  formErrors = {
    'name': '',
    'surname': '',
    'cell_no': '',
    'address': '',
    'email_address': '',
    'password': '',
    'confirm_password': '',
    'passwordGroup': ''

  }

  // userData = {"name":"", "surname":"", "email":"","password":"", "cpassword":"", "cell_no":""};//reg
  // tslint:disable-next-line: max-line-length
  constructor( public adminService: AdminService,
    private router: Router,
    private postPvdr: PostProvider,
    private actRoute:ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) { }

    addCust: any = [];

    customerReg = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      cell_no: ['', [Validators.required, Validators.pattern('(^0[123678][123456789][0-9]{7})')]],
      address: ['', Validators.required],
      email_address: ['', [Validators.required, Validators.pattern('[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.pattern('[A-z].{8,}')]],
        confirm_password: ['', [Validators.required]]
      }, { validator: matchPsw })
  
    })


  ngOnInit() {

    this.actRoute.params.subscribe((data: any) => {

      this.name = data.name;
      this.surname = data.surname;
      this.address =this.address;
      this.email_address =this.email_address;
      this.cell_no = data.cell_no;
      this.password = data.password;
      console.log(data);
    });

    this.customerReg.valueChanges.subscribe((data)=>{
      this.logValidationErrors(this.customerReg);
    });

  }

  getVendors()
  {
    this.adminService.createProfile(this.addCust).subscribe((data: any)=>
    {this.addCust=data;
    console.log(this.addCust);

    });

  }

  registerEnter() {

    return new Promise(resolve => {

      const newFormData = {

        aksi: 'add',
        name : this.name,
        surname : this.surname,
        address:this.address,
        email_address: this.email_address,
        cell_no: this.cell_no,
        password: this.password
        
      };
      this.adminService.createProfileUser(newFormData).subscribe(data => {
        console.log(data);

      });
      return this.router.navigateByUrl('');
      });
 

  }
 /* registerEnter() {

    // tslint:disable-next-line: max-line-length
    this.serv.registerData(this.userData.name,
    this.userData.surname, this.userData.email, this.userData.password, this.userData.cpassword, this.userData.cell_no);


  }*/


 /* goHome()
 {
   this.route.navigateByUrl('/home');
 }
 btnClear(){
 } */


 // back button
 backButton() {
  this.location.back();
 }


 logValidationErrors(group: FormGroup = this.customerReg): void {
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

logCustomer() {
  console.log(this.customerReg.value);
}


}
function matchPsw(group: AbstractControl): { [key: string]: any } | null { //gets reference value from password group containing both pasword and confirm password
  const passwordControl = group.get('password');  //getting and assigning password
  const confirmPasswordControl = group.get('confirm_password');  //getting and assigning confirm password

  if (passwordControl.value === confirmPasswordControl.value || (confirmPasswordControl.pristine)) //if statement compares password and confirm password
  {
    return null; //return null if passwords match
  }
  else {
    return { 'notMatch': true }; //return 'notMatch' if passwords do not match
  }

}
