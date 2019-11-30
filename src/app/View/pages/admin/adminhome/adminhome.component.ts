import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../../../Shared/Services/user.service'; 
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule, DxButtonModule
} from 'devextreme-angular';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  tab: number;

  apiUrl: String = environment.api_url;
  randomuserList: any;
  // constructor(private userService: UserService,private formBuilder: FormBuilder,private toast:ToastrService) { 
    
  // }
  clientForm: FormGroup;
 
  step1:any;
  step2:any;

  setTab(tab){
    this.tab = tab;
  }
  setFormValue(myaddform){
    if(this.tab==1)
      this.step1 = myaddform;
      else
      this.step2 = myaddform;
  }
  closeForm(myaddform){
    //myaddform.resetForm()
    this.createUser = {}
   // this.getServiceLine();
  }

  createUser:any={} 

  hospitalList: any;
  ngOnInit() {
    this.getHospitalList();
  } 
  
  // ******************************************
  // Get All Data list - Client 
  //********************************************
  // setupstat: string;
  // solve: any;
   getHospitalList() {

  //   this.UserService.getHospitalAllData().subscribe(
  //     data => {
  //       this.hospitalList = data;

  //       console.log("hospitalList", data)

  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log(err.message);
  //     }

  //   );

     }
  // ******************************************
  // Get All Client - Based on mode value - a/h/p
  //********************************************
  // open: any = 'a';
  // getHospitalDatamode(event, mode) {
  //   this.open=mode;
  //   //alert("mode : " + mode)
  //   if (mode == 'a') {
  //     this.ngOnInit()
  //   } else if (mode == 'h') {
  //     this.getHospitalDataByMode(mode)
  //   } else {
  //     this.getHospitalDataByMode(mode)

  //   }
  // }
  // ******************************************
  // Get All Data Based on Hospital(h) / Pratices(p)
  //********************************************
  // getHospitalDataByMode(mode) {
  //   this.UserService.getHospitalData(mode).subscribe(
  //     data => {
  //       this.hospitalList = data;

  //     });
  // }



  open: any = 'A';
  getHospitalDatamode(event, mode) {
    this.open = mode;
    if (mode == 'A') {
      alert("mode : " + mode)
    } else if (mode == 'male') {
      this.getDataByMode(mode)
      alert("mode : " + mode)
    } else {
      alert("mode : " + mode)
      this.getDataByMode(mode)

    }
  }
  getDataByMode(mode) {
    // this.UserService.getrandomeuserData(mode).subscribe(
    //   data => {
    //     this.randomuserList = data;
    //    // console.log(JSON.stringify(this.randomuserList));
    //   }     
    //   );
  }

}
