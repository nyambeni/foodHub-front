import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  logForm:any={};
  constructor(private router: Router,
    public adminservice: AdminService) { }

  ngOnInit() {
  }


goVendor()
{
  

   this.adminservice.getUser()
        .subscribe(data => this.logForm = data);

        return this.router.navigateByUrl('/vendor-admin');
}
}
