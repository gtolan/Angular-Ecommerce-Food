import { Component } from "@angular/core";
import { SharedService } from "./shopping-cart.service";
import { IProduct } from "./product.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "foodcommerce";
  cart: IProduct[] = [];
  constructor(private _sharedService: SharedService) {
    _sharedService.changeEmitted$.subscribe(item => {
      console.log(item, "app emitted");
      // this.addToCart(item);
    });
  }
  addToCart(item) {
    // this.cart.push(item);
  }
}
