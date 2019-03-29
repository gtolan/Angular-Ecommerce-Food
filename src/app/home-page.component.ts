import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "home-page",
  templateUrl: "home-page.component.html"
})
export class HomePageComponent implements OnInit {
  @Output() addHomePageItem = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  addHomeItemToCart(item) {
    console.log("add menu item to cart -home page component", item);
    // this.addHomePageItemToCart.emit(item);
    this.addHomePageItem.emit(item);
  }
}
