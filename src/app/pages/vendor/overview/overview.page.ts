import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(private adminService : AdminService ) { }
  adminProf: any = '';
 ngOnInit() {
  this.getAdminData();
 }
 getAdminData(){
   return this.adminService.getProfile().subscribe((data: any) => {this.adminProf = data; console.log(this.adminProf);})
 }

}
