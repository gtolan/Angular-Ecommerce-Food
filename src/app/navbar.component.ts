import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { IProduct } from "./product.model";
import { SharedService } from "./shopping-cart.service";
@Component({
  selector: "navbar",
  templateUrl: "navbar.component.html",
  styles: [
    `
      .mat-toolbar.mat-orange {
        background: orangered;
        color: white;
      }
      .mat-toolbar-row {
        font-family: "Montserrat", sans-serif;
        letter-spacing: 2px;
        padding: 0 2rem;
      }
      .home-link {
        outline: none;
        display: contents;
        cursor: pointer;
      }
      .hamburger-icon:hover {
        background-color: #393939;
        border-radius: 3px;
      }
      .mat-icon {
        padding-top: 1rem;
        padding-bottom: 1rem;
        outline: none;
        transition: 0.3s;
      }
      .mat-badge-content.mat-badge-active {
        left: -5px;
        top: 32px;
      }
    `
  ]
})
export class NavbarComponent implements OnChanges {
  @Input() cart: IProduct[];
  totalItems: number;
  constructor(private _sharedService: SharedService) {
    _sharedService.changeEmitted$.subscribe(item => {
      console.log(item, "app emitted");
      this.updateQuantity();
    });
  }

  ngOnChanges() {
    console.log(this.cart, "nav cart");
  }
  updateQuantity() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let cart = this._sharedService.getCartItems();
    let quants = cart.map(item => item.quantity);
    console.log(quants, "qs");
    let total = quants.reduce(reducer);
    this.totalItems = total;
    console.log(this.totalItems, "tot items");
  }
}
