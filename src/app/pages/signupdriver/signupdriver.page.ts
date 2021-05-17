import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import {PostProvider } from '../../../providers/post-provider';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl
} from '@angular/forms';
import { ServiceproviderService } from 'src/app/services/serviceprovider.service';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-signupdriver',
  templateUrl: './signupdriver.page.html',
  styleUrls: ['./signupdriver.page.scss'],
})
export class SignupdriverPage implements OnInit {
  name: string = "";
  surname: string = "";
  cell_no: number;
  vehicleNo:string="";
  email_address: string = "";
  address: string ="";
  password: string = "";
  confirm_password: string = "";

  public errorFeedback = {

    'name': {
      'required': 'Name is required',
      'maxlength': 'Name cannot be longer than 50 characters',
      'minlength': 'Name cannot be less than 2 characters'
    },

    'surname': {
      'required': 'surname is required',
      'pattern': 'Please enter a valid surname'
    },
    'cell_no': {
      'required': 'Cellphone number is required',
      'pattern': 'Please enter a valid cellphone number'
    },
    'vehicleNo': {
      'required': 'Vehicle registration number is required',
      'pattern': 'Please enter a valid Gauteng registration number'
    },
    'address': {
      'required': 'Physical address is required'
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
    'vehicleNo': '',
    'address': '',
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


  addDrivers: any = [];
  

  driverReg = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    cell_no: ['', [Validators.required, Validators.pattern('(^0[123678][123456789][0-9]{7})')]],
    vehicleNo: ['', [Validators.required, Validators.pattern('^[A-Z]{2}[0-9]{2}[A-Z]{2}?(GP)$')]],
    address: ['', Validators.required],
    email_address: ['', [Validators.required, Validators.pattern('[A-z]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    passwordGroup: this.fb.group({
      password: ['', [Validators.required, Validators.pattern('[A-z].{8,}')]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]]
    }, { validator: matchPsw })

  })


  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => {

      this.name = data.name;
      this.surname = data.surname;
      this.address = data.address;
      this.vehicleNo = data.vehicleNo;
      this.email_address =this.email_address;
      this.cell_no = data.cell_no;
      this.password = data.password;

      console.log(data);
    });

    this.driverReg.valueChanges.subscribe((data)=>{
      this.logValidationErrors(this.driverReg);
    });

  }

  getDriver()
  {
    this.adminService.createProfileDriver(this.addDrivers).subscribe((data: any)=>
    {this.addDrivers=data;
    console.log(this.addDrivers);

    });

  }
  registerEnter() {

   
    return new Promise(resolve => {

      const newFormData = {

        aksi: 'add',
        name : this.name,
        surname : this.surname,
        address : this.address,
        vehicleNo:this.vehicleNo,
        email_address: this.email_address,
        cell_no: this.cell_no,
        password: this.password
      };
      this.adminService.createProfileDriver(newFormData).subscribe(data => {
        console.log(data);

      });
      return this.router.navigateByUrl('');
      });
 
  
    

  }

 backButton() {
  this.location.back();
 }

 logValidationErrors(group: FormGroup = this.driverReg): void {
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

logVendor() {
  console.log(this.driverReg.value);
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