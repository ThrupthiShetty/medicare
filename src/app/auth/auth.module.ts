import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AuthRoutingModule } from "./auth-routing.module";
import { SigninComponent } from "./signin/signin.component";
// import { P500Component } from './page500/p500/p500.component';
// import { PasswordComponent } from './password/password/password.component';
// import { P404Component } from "./page404/p404/p404.component";
// import { SigninComponent } from "./signin/signin/signin.component";
// import { SignupComponent } from "./signin/signup/signup.component";
// import { LockedComponent } from "./locked/locked/locked.component";
@NgModule({
  declarations: [
    //P500Component,
   // P404Component,
   SigninComponent
    // SignupComponent,
    // LockedComponent,
    // PasswordComponent,
    // P500Component,
    // PasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AuthModule {}
