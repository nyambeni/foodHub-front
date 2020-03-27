import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private adminService : AdminService ) { }
   adminProf: any = '';
  ngOnInit() {
   this.getAdminData();
  }
  getAdminData(){
    return this.adminService.getProfile().subscribe((data: any) => {this.adminProf = data; console.log(this.adminProf);})
  }

}
