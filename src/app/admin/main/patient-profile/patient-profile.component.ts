import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { MatDialog } from "@angular/material/dialog";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { RtcaService } from "../../../core/services/rtca.service";
import { Role } from "src/app/models/role";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";

@Component({
  selector: "app-patient-profile",
  templateUrl: "./patient-profile.component.html",
  styleUrls: ["./patient-profile.component.scss"],
})
export class PatientProfileComponent  extends UnsubscribeOnDestroyAdapter implements OnInit {
  
  claimsubmtting:Boolean = false;
  claimsubmtted:Boolean = false;
  claimRefId:string = "";
  constructor( private rtcaService: RtcaService,
    private route: ActivatedRoute,
    private router: Router,private dialog: MatDialog) {

    super();
  }

  ngOnInit(): void {

    this.subs.sink = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.claimsubmtted = params['claimID'] || false;
        this.claimRefId = params['claimRefId'] || 0;

        console.log('claimsubmtted: ', this.claimsubmtted);
      });
  }

  submitClaim() {
    // this.submitted = true;
    // this.loading = true;
    // this.adminloading = true;
    // this.error = "";
    // if (this.authForm.invalid) {
    //   this.error = "Username and Password not valid !";
    //   return;
    // } else {
      this.claimsubmtting = true;
      this.subs.sink = this.rtcaService
        .submitClaim("user","payload")
        .subscribe(
          (res) => {
            if (res) {

              console.log(res)
              setTimeout(() => {
                this.claimsubmtting = false;
                this.router.navigate(["/admin/patients/patient-profile"], { queryParams: { claimID: true, claimRefId: 13312 } });
                // const role = Role.Admin ;
                // //this.authService.currentUserValue.role;
                // if (role === Role.All || role === Role.Admin) {
                //   this.router.navigate(["/admin/home/main"]);
                // } 
                // else if (role === Role.Doctor) {
                //   this.router.navigate(["/doctor/dashboard"]);
                // } else if (role === Role.Patient) {
                //   this.router.navigate(["/patient/dashboard"]);
                // } else {
                //   this.router.navigate(["/authentication/signin"]);
                // }
               
              }, 1000);
              // this.loading = false;

              //  this.sleep(1000);

              // this.adminloading = false;
            } else {
           //   this.error = "Invalid Login";
            }
          },
          (error) => {
            // this.error = error;
            // this.submitted = false;
            // this.loading = false;
            // this.adminloading = false;
          }
        );
    }
 // }

//  ngOnDestroy() {
//   this.sub.unsubscribe();
// }

}
