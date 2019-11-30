import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../../Shared/Services/user.service'; 

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.scss']
})
export class AdminlistComponent implements OnInit {

   constructor(private userService: UserService) { }

   ngOnInit() { 
    //  this.fetchCountryCode();
     }


  
				   /**fetchCountryCode */
//  counrtyCodeList:any;
//  countrycode:any=1;
//  fetchCountryCode(){
//   // alert("fetchCountryCode -admn");
//    this.userService.fetchCountryCode().subscribe(
//      data => {
//      this.counrtyCodeList = data;
//     // console.log("counrtyCodeList -admin : ", data )
//      })
     
//  } 

}
