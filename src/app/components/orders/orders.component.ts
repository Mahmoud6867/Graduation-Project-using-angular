import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  usersOrders!: Observable<any>;

  constructor(private firestore : Firestore){
    this.getOrders();
  }

  getOrders(){
    const collectionInstance = collection(this.firestore , "orders");
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);

      this.usersOrders = collectionData(collectionInstance)

    })
  }

}
