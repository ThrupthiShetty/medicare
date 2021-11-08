import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ProfileLayoutComponent } from './layout/profile-layout/profile-layout.component';
import { Role } from './models/role';

const routes: Routes = [
  {
    path: "",
    component: ProfileLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "/auth/signin", pathMatch: "full" },
      {
        path: "admin",
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },
      {
        path: "doctor",
        canActivate: [AuthGuard],
        data: {
          role: Role.Doctor,
        },
        loadChildren: () =>
          import("./doctor/doctor.module").then((m) => m.DoctorModule),
      },
      {
        path: "patient",
        canActivate: [AuthGuard],
        data: {
          role: Role.Patient,
        },
        loadChildren: () =>
          import("./patient/patient.module").then((m) => m.PatientModule),
      },
     
    ],
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./auth/auth.module").then(
        (m) => m.AuthModule
      ),
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
