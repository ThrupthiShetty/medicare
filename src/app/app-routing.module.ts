import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin/signin.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: SigninComponent,
    canActivate: [AuthGuard],
    children: [
      // { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
      // {
      //   path: "admin",
      //   canActivate: [AuthGuard],
      //   data: {
      //     role: Role.Admin,
      //   },
      //   loadChildren: () =>
      //     import("./admin/admin.module").then((m) => m.AdminModule),
      // },
      // {
      //   path: "doctor",
      //   canActivate: [AuthGuard],
      //   data: {
      //     role: Role.Doctor,
      //   },
      //   loadChildren: () =>
      //     import("./doctor/doctor.module").then((m) => m.DoctorModule),
      // },
      // {
      //   path: "patient",
      //   canActivate: [AuthGuard],
      //   data: {
      //     role: Role.Patient,
      //   },
      //   loadChildren: () =>
      //     import("./patient/patient.module").then((m) => m.PatientModule),
      // },
     
    ],
    
  },
  { path: "signin", component: SigninComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
