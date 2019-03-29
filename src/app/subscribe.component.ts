import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
@Component({
  selector: "subscribe",
  templateUrl: "subscribe.component.html",
  styles: [
    `
      section {
        color: white;
        text-align: center;
        background-color: black;
        margin-bottom: 0px;
        height: 15rem;
        padding-top: 2rem;
        font-family: "Montserrat", sans-serif;
      }
      .example-form {
        min-width: 150px;
        max-width: 500px;
        width: 100%;
        margin: auto;
      }
      input.mat-input-element {
        color: black;
      }
      .example-full-width {
        background-color: white;
        border-radius: 4rem;
        margin: auto;
        padding: 0rem 2rem;
        width: calc(100% - 4rem);
      }
      .subscribe {
        min-width: 150px;
        max-width: 463px;
        width: 90%;
        margin-top: 1rem;
      }
    `
  ]
})
export class SubscribeComponent {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  constructor(private snackBar: MatSnackBar) {}

  getErrorMessage() {
    return this.emailFormControl.hasError("required")
      ? "You must enter a value"
      : this.emailFormControl.hasError("email")
      ? "Not a valid email"
      : "";
  }
  subscribeButton() {
    if (this.emailFormControl.valid) {
      console.log("subscribed");
      this.openSnackBar("You have been added to our discount mailing list");
      console.log("FC", this.emailFormControl);
      // this.emailFormControl.reset();
    }
  }
  openSnackBar(msg) {
    let snackBarRef = this.snackBar.open(msg);
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 2000);
  }
}
