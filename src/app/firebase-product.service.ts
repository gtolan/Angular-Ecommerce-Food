import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";

@Injectable()
export class FirebaseProductService {
  pizzas;
  burgers;
  constructor(private db: AngularFireDatabase) {
    console.log(db, "DB");
  }

  getPizzas(): Observable<any> {
    let itemRef = this.db.object("pizzas");
    return itemRef.snapshotChanges();
  }

  getBurgers(): Observable<any> {
    let itemRef2 = this.db.object("burgers");
    return itemRef2.snapshotChanges();
  }
  getDesserts(): Observable<any> {
    let itemRef3 = this.db.object("desserts");
    return itemRef3.snapshotChanges();
  }
}
