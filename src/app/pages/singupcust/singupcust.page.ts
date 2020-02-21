import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singupcust',
  templateUrl: './singupcust.page.html',
  styleUrls: ['./singupcust.page.scss'],
})
export class SingupcustPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
 goHome()
 {
   this.route.navigateByUrl('/home');
 }

}
