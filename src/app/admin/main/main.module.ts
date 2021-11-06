import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";


import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  declarations: [
    DashboardComponent,
    
   DashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgApexchartsModule,
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
  ],
})
export class MainModule {}
