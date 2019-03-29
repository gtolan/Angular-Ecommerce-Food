import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { NavbarComponent } from "./navbar.component";
import { CarouselComponent } from "./carousel.component";
import { MenuComponent } from "./menu.component";
import { CategoriesComponent } from "./categories.component";
import { PizzaOfferComponent } from "./pizza-offer.component";
import { ShoppingCartComponent } from "./shopping-cart.component";
import { HomePageComponent } from "./home-page.component";
import { SubscribeComponent } from "./subscribe.component";
import { FooterComponent } from "./footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FirebaseProductService } from "./firebase-product.service";
import { SharedService } from "./shopping-cart.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    MenuComponent,
    CategoriesComponent,
    PizzaOfferComponent,
    ShoppingCartComponent,
    HomePageComponent,
    SubscribeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FirebaseProductService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  cart = [];
  addHomePageItemToCart(item) {
    console.log("app mod add item", item);
    this.cart.push(item);
  }
}
