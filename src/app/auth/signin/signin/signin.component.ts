import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { Role } from "src/app/models/role";
import { AuthService } from "src/app/core/services/auth.service";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent
  // extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  authForm!: FormGroup;
  submitted = false;
  loading = false;
  adminloading = false;
  doctorloading = false;
  patientloading = false;
  error = "";
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    //super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      adminusername: ["admin@hospital.org", Validators.required],
      doctorusername: ["doctor@hospital.org", Validators.required],
      patientusername: ["patient@hospital.org", Validators.required],
      password: ["admin@123", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  adminSet() {
  
    this.authForm.get("adminusername")!.setValue("admin@hospital.org");
    this.authForm.get("password")!.setValue("admin@123");
  }
  doctorSet() {
    this.authForm.get("doctorusername")!.setValue("doctor@hospital.org");
    this.authForm.get("password")!.setValue("doctor@123");
  }
  patientSet() {
    this.authForm.get("patientusername")!.setValue("patient@hospital.org");
    this.authForm.get("password")!.setValue("patient@123");
  }

  adminLoginSet(){
    this.adminSet();
   
   
    //this.onSubmit(this.f.adminusername.value);
 
  //  this.adminloading = false;
  //this.router.navigate(["/admin/home/main"]);
  
  }

  doctorLoginSet(){
    this.doctorSet();
   // this.onSubmit(this.f.doctorusername.value);
  // this.router.navigate(["/patient/dashboard"]);
            
  }


  patientLoginSet(){
    this.patientSet();
   // this.onSubmit(this.f.patientusername.value);
 // this.router.navigate(["/patient/dashboard"]);
            
  }
  onSubmit(username:any) {
    // this.submitted = true;
    // this.loading = true;
    // this.adminloading = true;
    // this.error = "";
    // if (this.authForm.invalid) {
    //   this.error = "Username and Password not valid !";
    //   return;
    // } else {
    //   this.subs.sink = this.authService
    //     .login(username, this.f.password.value)
    //     .subscribe(
    //       (res) => {
    //         if (res) {
    //           setTimeout(() => {
    //             const role = this.authService.currentUserValue.role;
    //             if (role === Role.All || role === Role.Admin) {
    //               this.router.navigate(["/admin/home/main"]);
    //             } else if (role === Role.Doctor) {
    //               this.router.navigate(["/doctor/dashboard"]);
    //             } else if (role === Role.Patient) {
    //               this.router.navigate(["/patient/dashboard"]);
    //             } else {
    //               this.router.navigate(["/authentication/signin"]);
    //             }
               
    //           }, 1000);
    //           this.loading = false;

    //            this.sleep(1000);

    //           this.adminloading = false;
    //         } else {
    //           this.error = "Invalid Login";
    //         }
    //       },
    //       (error) => {
    //         this.error = error;
    //         this.submitted = false;
    //         this.loading = false;
    //         this.adminloading = false;
    //       }
    //     );
    // }
  }

  sleep(ms:any) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
