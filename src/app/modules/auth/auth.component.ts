import { Component, OnInit } from "@angular/core";
import {
  FirebaseUISignInSuccessWithAuthResult,
  FirebaseUISignInFailure
} from "firebaseui-angular";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  uid;
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(this.firebaseAuthChangeListener);
  }

  private firebaseAuthChangeListener(response) {
    // if needed, do a redirect in here
    if (response) {
      console.log("Logged IN :)");
    } else {
      console.log("Logged out :(");
    }
  }
  ngOnInit() {}

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    this.uid = signInSuccessData.authResult.user.uid;
  }
  errorCallback(errorData: FirebaseUISignInFailure) {
    console.log(errorData.code);
    console.log(errorData.credential);
  }
  
}
