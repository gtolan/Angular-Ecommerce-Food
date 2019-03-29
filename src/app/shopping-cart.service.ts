import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IProduct } from "./product.model";
@Injectable()
export class SharedService {
  cart: IProduct[] = [];
  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands

  addToCart(item) {
    if (this.cart.filter(pro => pro.name === item.name).length > 0) {
      this.cart.forEach(product => {
        if (product.name === item.name) {
          return product.quantity++;
        }
      });
    } else {
      item.quantity = 1;
      this.cart.push(item);
    }
  }

  emitChange(change: any) {
    this.addToCart(change);
    console.log("add to CART");
    this.emitChangeSource.next(change);
  }
  getCartItems() {
    console.log("get cart", this.cart);
    return this.cart;
  }
}
