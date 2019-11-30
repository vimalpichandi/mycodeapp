import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { UserService } from './shared/services/user.service';
import { DxDataGridModule } from 'devextreme-angular';
// import { ApiService, Company } from './Shared/Services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   
})
export class AppComponent implements OnInit{
  
  // dataSource: Company[];
  //   constructor(service: ApiService) {
  //       this.dataSource = service.getCompanies();
  //   }
  //constructor(/*private router: Router,private userService: UserService*/) { }

  ngOnInit() {
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //     return;
    //   }
    //   window.scrollTo(0, 0);
    // });

    // this.userService.populate();
  }
}
