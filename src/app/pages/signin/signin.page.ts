import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
// import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private location: Location, private data: DataService, private route: Router /* , private authService: AuthenticationService */ ) { }

  ngOnInit() {
  }
 back(){
   this.location.back();
 }


 gotoProfile(){
   this.route.navigateByUrl('/custprof');
 }

 /* auth guard
 loginUser(){
  this.authService.login();
}*/

}
