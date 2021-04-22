
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl
} from '@angular/forms';
import {PostProvider } from '../../../providers/post-provider';
import {AdminService} from 'src/app/services/admin.service';
import { NgModule, Pipe} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient} from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-singupcust',
  templateUrl: './singupcust.page.html',
  styleUrls: ['./singupcust.page.scss'],
})

export class SingupcustPage implements OnInit {

  firstname: string = "";
  surname: string = "";
  gender: string = "";
  // tslint:disable-next-line: variable-name
  cell_no: number;
  // tslint:disable-next-line: variable-name
  email_address: string = "";
  addressInfo: string ="";
  passcode: string = "";
  // tslint:disable-next-line: variable-name
  confirm_password: string = "";

  // userData = {"name":"", "surname":"", "email":"","password":"", "cpassword":"", "cell_no":""};//reg
  // tslint:disable-next-line: max-line-length
  constructor(public adminservice: AdminService,
    private router: Router,
     private location: Location, 
     private actRoute: ActivatedRoute,
      private postPvdr: PostProvider,
      private fb: FormBuilder) { }

      msgTrue = false;
    contantList : any;

  ngOnInit() {

    this.adminservice.getUser().subscribe(data =>{
      this.contantList = data;

    this.actRoute.params.subscribe((data: any) => {

      this.firstname = data.name;
      this.surname = data.sur;
      this.passcode = data.pass;
      this.email_address = data.email;
      this.addressInfo = data.addressI;
      this.gender = data.gen;
      this.confirm_password = data.confirm;

      console.log(data);

      });

    })
  }

  goUser() {

    const newFormData = {

      aksi: 'add',
      firstname : this.firstname,
      surname : this.surname,
      passcode: this.passcode,
      email_address: this.email_address,
      addressInfo: this.addressInfo,
      gender: this.gender
    };
   
    this.adminservice.createProfileUser(newFormData).subscribe(data => {
      this.msgTrue =true;
      console.log(data);
         });
   
        this.router.navigateByUrl('/login');
     }

  backButton() {
       this.location.back();
    }

} 

 



