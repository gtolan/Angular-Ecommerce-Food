import { Component, OnInit } from "@angular/core";
import { SharedService } from "./shopping-cart.service";

@Component({
  selector: "shopping-cart",
  templateUrl: "shopping-cart.component.html",
  styles: [
    `
      .empty-cart {
        text-align: center;
        font-family: "Montserrat", sans-serif;
        margin: 6rem;
      }
      table {
        width: 90vw;
        margin-top: 2rem;
        margin-left: 5vw;
        margin-bottom: 2rem;
      }
      .food-avatar {
        height: 40px;
      }
      h4.total {
        margin-left: calc(100vw - 16rem);
        width: 10rem;
        padding: 1rem;
        border: 1px solid lightgray;
        box-shadow: 0px 0px 3px 3px lightgrey;
        font-family: Roboto, "Helvetica Neue", sans-serif;
        letter-spacing: 2px;
        font-weight: 400;
      }
      input.change-quantity {
        width: 35px;
        height: 32px;
        font-size: 0.9rem;
      }
      button.check-out {
        margin-left: calc(100vw - 16rem);
        width: 12rem;
        margin-bottom: 3rem;
      }
    `
  ]
})
export class ShoppingCartComponent implements OnInit {
  cart = [];
  cartTotal: number;
  displayedColumns: string[] = ["image", "name", "price", "quantity", "total"];
  dataSource;
  totalItems: number;

  constructor(private _sharedService: SharedService) {
    _sharedService.changeEmitted$.subscribe(item => {
      console.log(item, "app emitted");
      // this.cart.push(item);
    });
  }

  ngOnInit() {
    let cart = this._sharedService.getCartItems();
    console.log(cart, "shop-cart");
    // this.cart = cart;
    this.dataSource = cart;

    this.calculateTotal();
    this.checkQuantity();
  }
  checkQuantity() {
    if (this.dataSource.length !== 0) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let cart = this.dataSource;
      let quants = cart.map(item => Number.parseInt(item.quantity));
      console.log(quants, "qs");
      let total = quants.reduce(reducer);
      this.totalItems = total;
      console.log(this.totalItems, "tot items");
    } else {
      this.totalItems = 0;
    }
  }
  calculateTotal() {
    let total = 0;
    this.dataSource.map(item => {
      let itemTotal = item.price * item.quantity;
      console.log(itemTotal, "item toal");
      return (total += itemTotal);
    });
    console.log(total);
    this.cartTotal = total;
  }
  updateQuantity(item) {
    console.log(item, "update quant");
    if (item.quantity <= 0) {
      console.log("remove item");
      let itemName = item.name;
      console.log(itemName);
      this.dataSource = this.dataSource.filter(item => {
        return itemName !== item.name;
      });
    }
    this.checkQuantity();
    this.calculateTotal();
  }
  removeItem(item) {
    let itemName = item.name;
    this.dataSource = this.dataSource.filter(item => {
      return itemName !== item.name;
    });
    this.calculateTotal();
  }
}
