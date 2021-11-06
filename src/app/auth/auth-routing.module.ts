import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
// import { LockedComponent } from "./locked/locked/locked.component";



// import { P404Component } from "./page404/p404/p404.component";
// import { P500Component } from "./page500/p500/p500.component";
// import { PasswordComponent } from "./password/password/password.component";
// import { SigninComponent } from "./signin/signin/signin.component";
// import { SignupComponent } from "./signin/signup/signup.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full",
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  // {
  //   path: "signup",
  //   component: SignupComponent,
  // },
  // {
  //   path: "forgot-password",
  //   component: PasswordComponent,
  // },
  // {
  //   path: "locked",
  //   component: LockedComponent,
  // },
  // {
  //   path: "page404",
  //   component: P404Component,
  // },
  // {
  //   path: "page500",
  //   component: P500Component,
  // },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

