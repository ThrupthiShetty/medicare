import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { User } from "src/app/models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedInUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.loggedInUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("loggedInUser")!)
    );
    this.currentUser = this.loggedInUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    console.log(this.loggedInUserSubject.value)
    return this.loggedInUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          localStorage.setItem("loggedInUser", JSON.stringify(user));
          this.loggedInUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("loggedInUser");
    this.loggedInUserSubject.next(null!);
    return of({ success: false });
  }
}
