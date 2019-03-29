import { Component, OnInit } from "@angular/core";

@Component({
  selector: "categories",
  templateUrl: "categories.component.html",
  styleUrls: ["categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  sections = [
    {
      title: "Pizzas",
      poster: "/assets/videos/pizza.png",
      link: "/menu/pizzas",
      position: "top",
      image: ""
    },
    {
      title: "Burgers",
      poster: "/assets/videos/burgers.png",
      link: "/menu/burgers",
      position: "right",
      image: ""
    },
    {
      title: "Desserts",
      poster: "/assets/videos/icecream.png",
      link: "/menu/desserts",
      position: "bottom",
      image: ""
    }
  ];
  constructor() {}

  ngOnInit() {}
}
