import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FirebaseProductService } from "./firebase-product.service";
import { Observable, Subject } from "rxjs";
import { IPizzas, IBurgers, IDesserts } from "./product.model";
import { ActivatedRoute, Params } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { SharedService } from "./shopping-cart.service";
@Component({
  selector: "menu-list",
  templateUrl: "menu-list.component.html",
  styleUrls: ["menu-list.component.css"]
})
export class MenuComponent implements OnInit {
  @Output() addMenuItemToCart = new EventEmitter();
  menu = {
    title: "Hawaiian",
    image: "image",
    toppings: "topps",
    poster: "bg"
  };
  pizzas: Observable<IPizzas>;
  burgers: Observable<IBurgers>;
  desserts: Observable<IDesserts>;
  pizzaTitle: boolean = false;
  burgerTitle: boolean = false;
  dessertTitle: boolean = false;
  showBurgers: boolean;
  showPizzas: boolean;
  showDesserts: boolean;
  constructor(
    private fb: FirebaseProductService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private cartService: SharedService
  ) {}

  ngOnInit() {
    this.pizzaTitle = false;
    this.burgerTitle = false;
    this.dessertTitle = false;
    this.route.params.forEach((params: Params) => {
      console.log(params, "RParams");
      if (params && params.category === "pizzas") {
        this.renderPizzas();
        this.showBurgers = false;
        this.showDesserts = false;
        this.showPizzas = true;
        this.pizzaTitle = true;
        this.burgerTitle = false;
        this.dessertTitle = false;
      } else if (params && params.category === "burgers") {
        this.renderBurgers();
        this.showPizzas = false;
        this.showDesserts = false;
        this.showBurgers = true;
        this.pizzaTitle = false;
        this.burgerTitle = true;
        this.dessertTitle = false;
      } else if (params && params.category === "desserts") {
        this.renderDesserts();
        this.showBurgers = false;
        this.showPizzas = false;
        this.showDesserts = true;
        this.pizzaTitle = false;
        this.burgerTitle = false;
        this.dessertTitle = true;
      } else {
        this.renderPizzas();
        this.renderBurgers();
        this.renderDesserts();
        this.showBurgers = true;
        this.showPizzas = true;
        this.showDesserts = true;
        this.pizzaTitle = true;
        this.burgerTitle = true;
        this.dessertTitle = true;
      }
      // this.event = this.eventService.getEvent(+params["id"]);
    });
  }
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
  renderPizzas() {
    this.fb.getPizzas().subscribe(action => {
      this.pizzas = action.payload.val();
      console.log(this.pizzas, "pizzas");
    });
    this.pizzaTitle = true;
  }
  renderBurgers() {
    console.log(this.pizzas, "pizzas");
    this.fb.getBurgers().subscribe(action => {
      console.log(action.payload.val());
      this.burgers = action.payload.val();
      return this.burgers;
    });
    this.burgerTitle = true;
  }
  renderDesserts() {
    this.fb.getDesserts().subscribe(action => {
      console.log(action.payload.val());
      this.desserts = action.payload.val();
      return this.desserts;
    });
    this.dessertTitle = true;
  }
}
