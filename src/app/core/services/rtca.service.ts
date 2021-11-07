import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { User } from "src/app/models/user";
import { FHIRClaim } from "src/app/models/fhirClaim";

//

@Injectable({
  providedIn: 'root'
})
export class RtcaService {

  constructor(private http: HttpClient) { }


  submitClaim(username: string, payload: any) {
    return this.http
      .post<any>(`${environment.FHIRApiUrl}/fhir/Claim?user_key=53b0f2224a613c293312ec0efdc6b410`,

        FHIRClaim.claim
      )
      .pipe(
        map((fhirClaimResponse) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          localStorage.setItem("loggedInUser", JSON.stringify(fhirClaimResponse));
          //this.loggedInUserSubject.next(user);
          return fhirClaimResponse;
        })
      );
  }
}
