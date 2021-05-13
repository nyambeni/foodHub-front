import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-singupadmin',
  templateUrl: './singupadmin.page.html',
  styleUrls: ['./singupadmin.page.scss'],
})
export class SingupadminPage implements OnInit {

  //vendorReg : FormGroup;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    private actRoute:ActivatedRoute,
    private location: Location,
    private fb : FormBuilder) { }

    vendorReg = this.fb.group({
      restuarant_name: ['', Validators.required],
      email: ['', Validators.required],
      cellPhone: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })

  ngOnInit() {
<<<<<<< HEAD
=======
    
    this.actRoute.params.subscribe((data: any) => {

      this.restuarant_name = data.restuarant_name;
      this.address = data.address;
      this.email_address =this.email_address;
      this.cellNo = data.cellNo;
      this.password = data.password;
      console.log(data);
    });

    
    
  
   


this.vendorReg.valueChanges.subscribe((data)=>{
  this.logValidationErrors(this.vendorReg);
});

  }

  getVendors()
  {
    this.adminService.createProfile(this.addVendors).subscribe((data: any)=>
    {this.addVendors=data;
    console.log(this.addVendors);

    });
>>>>>>> ea2e450c2aa66a21b9063ca99c9c34a56af9caa4

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


 logVendor() {
   console.log(this.vendorReg.value);
 }

}

