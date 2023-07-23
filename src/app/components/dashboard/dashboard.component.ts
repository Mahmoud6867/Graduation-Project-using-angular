import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  usersOrders!: Observable<any>;
  usersOrdersNum!: number;

  Cities!: Observable<any>;
  CitiesNum!: number;

  ads!: Observable<any>;
  adsNum!: number;
  constructor(private firestore : Firestore){
    this.getOrders();
    this.getCities();
    this.getAds();
  }

  getOrders(){
    const collectionInstance = collection(this.firestore , "orders");
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);

      this.usersOrders = collectionData(collectionInstance)
      this.usersOrdersNum=val.length


    })
  }

  getCities(){
    const collectionInstance = collection(this.firestore , "cities");
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);

      this.Cities = collectionData(collectionInstance)
      this.CitiesNum=val.length


    })
  }
  getAds(){
    const collectionInstance = collection(this.firestore , "ads");
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);

      this.ads = collectionData(collectionInstance)
      this.adsNum=val.length


    })
  }
}
