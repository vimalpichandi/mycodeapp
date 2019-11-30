import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DxDataGridModule } from "devextreme-angular";
import { DxTooltipModule, DxTemplateModule } from 'devextreme-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { DataTablesModule } from 'angular-datatables';
import { DxSelectBoxModule } from 'devextreme-angular';
import { ToastrModule } from 'ngx-toastr';
import {AuthGuard} from './AuthGuard/auth-guard.service.guard';
import {NoAuthGuard}from './AuthGuard/no-auth-guard.service.guard';

import { MustMatchDirective } from './Helper/must-match.directive';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//Services
import { UserService } from './Shared/Services/user.service';
import { ApiService,  Company  } from './Shared/Services/api.service';
import { JwtService } from './Shared/Services/jwt.service'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Layout/Footer/footer.component';
import { HeaderComponent } from './Layout/Header/header.component'; 
import { SidemenuComponent } from './Layout/Sidemenu/sidemenu.component';
import { LayoutComponent } from './Layout/layout.component';
import { LoginComponent } from './View/login/login.component';
import { ChangepasswordComponent } from './View/changepassword/changepassword.component';
import { ForgotpasswordComponent } from './View/forgotpassword/forgotpassword.component';
import { AdminhomeComponent } from './View/pages/admin/adminhome/adminhome.component';
import { UserhomeComponent } from './View/pages/user/userhome/userhome.component';
import { RecoverpasswordComponent } from './View/recoverpassword/recoverpassword.component';
import { ProfileComponent } from './View/profile/profile.component';
import { ResetpasswordComponent } from './View/resetpassword/resetpassword.component';
import { AdminlistComponent } from './View/pages/admin/adminlist/adminlist.component';
 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidemenuComponent,
    LayoutComponent,
    LoginComponent,
    MustMatchDirective,
    AdminhomeComponent,
    UserhomeComponent,

    ChangepasswordComponent,
    ForgotpasswordComponent,
    RecoverpasswordComponent,
    ProfileComponent,
    ChangepasswordComponent,
    ResetpasswordComponent,
    AdminlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,   
    HttpClientModule,
    HttpModule,
    FormsModule,ReactiveFormsModule,
    NgbModule,
    DxTooltipModule, DxTemplateModule,
  //  DataTablesModule,
    DxSelectBoxModule,
    DxDataGridModule,
    ToastrModule.forRoot()

  ],
  providers: [
    ApiService,
    UserService,
    AuthGuard,
    NoAuthGuard,
    JwtService, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
      
    }],
    //dataSource: Company[];
  bootstrap: [AppComponent]
})
export class AppModule { }
// platformBrowserDynamic().bootstrapModule(AppModule);