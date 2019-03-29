import { Routes } from "@angular/router";
import { MenuComponent } from "./menu.component";
import { ShoppingCartComponent } from "./shopping-cart.component";
import { HomePageComponent } from "./home-page.component";

//import { Error404Component } from "./errors/404.component";

export const appRoutes: Routes = [
  {
    path: "menu/:category",
    component: MenuComponent
  },
  {
    path: "shopping-cart",
    component: ShoppingCartComponent
  },
  {
    path: "home",
    component: HomePageComponent
  },

  //   { path: "events/session/new", component: CreateSessionComponent },
  //   { path: "404", component: Error404Component },
  { path: "", redirectTo: "/home", pathMatch: "full" }
  //   { path: "user", loadChildren: "./user/user.module#UserModule" }
];
