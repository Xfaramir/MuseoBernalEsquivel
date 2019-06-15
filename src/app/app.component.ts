import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "museobernalesquivel";
  constructor(public afAuth: AngularFireAuth) {}
  logout() {
    this.afAuth.auth.signOut();
  }
}
