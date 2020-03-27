import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-singupcust',
  templateUrl: './singupcust.page.html',
  styleUrls: ['./singupcust.page.scss'],
})
export class SingupcustPage implements OnInit {

  constructor(private route: Router, private location: Location) { }

  ngOnInit() {
  }
 goHome()
 {
   this.route.navigateByUrl('/home');
 }
 btnClear(){
   
 }
 //back button
 backButton(){
  this.location.back();
 }

}
