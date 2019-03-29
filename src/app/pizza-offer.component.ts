import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { SharedService } from "./shopping-cart.service";

@Component({
  selector: "pizza-offer",
  templateUrl: "pizza-offer.component.html",
  styles: [
    `
      .section-bg {
        width: 100vw;
        min-height: 34rem;
      }
      section h1 {
        text-align: right;
        font-size: 5rem;
        position: absolute;
        right: 0px;
        color: white;
        text-transform: uppercase;
        margin-right: 3rem;
        font-family: "Acme", sans-serif;
      }
      section h1 span {
        display: block;
        font-size: 3.85rem;
      }
      section .old-price {
        position: absolute;
        right: 1em;
        margin-top: 16rem;
        font-size: 3rem;
        color: lightyellow;
        text-decoration: line-through;
      }
      section .offer-price {
        position: absolute;
        right: 0.75em;
        margin-top: 21rem;
        font-size: 4rem;
        color: lightyellow;
      }
      h3.offer-price:before {
        content: "Now";
        font-size: 1rem;
        text-transform: uppercase;
        background-color: #ff0000a6;
        color: white;
        padding: 0.5rem 1rem;
        margin-top: -1rem;
        position: absolute;
        margin-left: -2rem;
        transform: rotate(-26deg);
      }
      button.add-to-cart {
        position: absolute;
        margin-top: 30rem;
        right: 3rem;
        font-size: 1.2rem;
        color: white;
        background: transparent;
        border: 2px solid white;
        padding: 0.5rem 3rem;
        border-radius: 2rem;
        width: 16rem;
        cursor: pointer;
      }
      @media screen and (max-width: 600px) {
        section h1 {
          text-align: right;
          font-size: 2.12rem;
        }
        .section-bg {
          width: auto;
          max-height: 34rem;
          overflow: hidden;
        }
        .old-price {
          margin-top: 10rem !important;
        }
        .offer-price {
          margin-top: 13rem !important;
        }
        button.add-to-cart {
          margin-top: 21rem !important;
        }
      }
    `
  ]
})
export class PizzaOfferComponent implements OnInit {
  title: string = "The Mighty";
  titlesub: string = "Meaty";
  oldPrice: number = 24;
  price: number = 15.0;
  offer = {
    name: "The Mighty Meaty",
    price: 15.0,
    toppings:
      "Ham, Pepperoni, Meatballs, Mushrooms, Mozzarella,Onions, Green & Red Peppers",
    image: "./assets/pizzas/MightyMeat.png"
  };
  constructor(
    private snackBar: MatSnackBar,
    private cartService: SharedService
  ) {}

  ngOnInit() {}
  addItemToCart(item) {
    console.log("add item", item);
    // this.addMenuItemToCart.emit(item);
    this.cartService.emitChange(item);
    this.openSnackBar(item.name);
  }
  openSnackBar(name) {
    let snackBarRef = this.snackBar.open(name + " added to cart!");
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 2000);
  }
}
