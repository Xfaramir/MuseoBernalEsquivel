import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "./auth.component";
import { FirebaseUIModule } from "firebaseui-angular";
import { firebaseUiAuthConfig } from "../core/conf";

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, FirebaseUIModule.forRoot(firebaseUiAuthConfig)],
  exports: [AuthComponent]
})
export class AuthModule {}
