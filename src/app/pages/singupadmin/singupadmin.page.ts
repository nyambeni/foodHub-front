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

