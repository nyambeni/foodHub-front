import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-singupadmin',
  templateUrl: './singupadmin.page.html',
  styleUrls: ['./singupadmin.page.scss'],
})
export class SingupadminPage implements OnInit {

  constructor(private route: Router, private location: Location) { }

  ngOnInit() {
  }
  goHome()
 {
   this.route.navigateByUrl('/home');
 }
 navAdmin(){
  return this.route.navigateByUrl('/vendor-admin')
}
 btnClear(){
  
}
//back button
backButton(){
  this.location.back();
 }


}
