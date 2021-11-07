import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PatientProfileComponent } from "./patient-profile/patient-profile.component";
// import { MainComponent } from "./main/main.component";
// import { DashboardComponent as doctorDashboard } from "./../../doctor/dashboard/dashboard.component";
// import { DashboardComponent as patientDashboard } from "./../../patient/dashboard/dashboard.component";

// import { DashboardComponent } from "./dashboard/dashboard.component";
// import { P404Component } from "src/app/auth/page404/p404/p404.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "patient-profile",
    component: PatientProfileComponent,
  },
  // {
  //   path: "doctor-dashboard",
  //   component: doctorDashboard,
  // },
  // {
  //   path: "patient-dashboard",
  //   component: patientDashboard,
  // },
  // { path: "**", component: P404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
