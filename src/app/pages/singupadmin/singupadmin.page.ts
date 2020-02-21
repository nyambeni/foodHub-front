import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singupadmin',
  templateUrl: './singupadmin.page.html',
  styleUrls: ['./singupadmin.page.scss'],
})
export class SingupadminPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goHome()
 {
   this.route.navigateByUrl('/home');
 }

}
