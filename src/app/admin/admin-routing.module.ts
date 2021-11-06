import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "main",
    loadChildren: () =>
      import("./main/main.module").then((m) => m.MainModule),
  },
  // {
  //   path: "appointment",
  //   loadChildren: () =>
  //     import("./appointment/appointment.module").then(
  //       (m) => m.AppointmentModule
  //     ),
  // },
  // {
  //   path: "doctors",
  //   loadChildren: () =>
  //     import("./doctors/doctors.module").then((m) => m.DoctorsModule),
  // },
  // {
  //   path: "careteam",
  //   loadChildren: () =>
  //     import("./careteam/careteam.module").then((m) => m.CareTeamModule),
  // },
  // {
  //   path: "patients",
  //   loadChildren: () =>
  //     import("./patients/patients.module").then((m) => m.PatientsModule),
  // },
  // {
  //   path: "finance",
  //   loadChildren: () =>
  //     import("./finance/finance.module").then((m) => m.FinanceModule),
  // },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
