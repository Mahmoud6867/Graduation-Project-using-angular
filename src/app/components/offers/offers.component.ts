import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
offers !: Observable<any> ;
id : string = '';
name !: string ;
nameAR !: string ;
price !: number ;
price2 !: number ;
description !: string ;
descriptionAR !: string ;
city !: string ;
cityAR !: string ;
avilabilty !: string ;
  constructor (private firestore :Firestore){
    this.getOffers();
  }

  getOffers(){
    const collectionInstance =  collection(this.firestore ,'Offers');
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);
      this.offers = collectionData(collectionInstance , {idField:'id'});
    })
  }
  saveOffer(){
    if (this.id == ''){
    const collectionInstance =  collection(this.firestore ,'Offers');
    if(this.name!='' && this.description!='' && this.price!=null
     && this.price2!=null && this.city !='' && this.avilabilty!=''
    && this.nameAR !='' && this.descriptionAR!=''&& this.city !='' ){
      addDoc(collectionInstance , {
        Name : this.name,
        NameAR : this.nameAR,
        price : this.price,
        price2 : this.price2,
        avilabilty : this.avilabilty,
        city : this.city,
        cityAR : this.cityAR,
        description : this.description ,
        descriptionAR : this.descriptionAR

      }).then(() => {
        console.log("offer saved");
      }).catch((err)=>{
        console.log(err);

      });
    }
  }
    else {
      const docInstance = doc(this.firestore ,'Offers' ,this.id);
    updateDoc(docInstance , {
      Name : this.name,
        NameAR : this.nameAR,
        price : this.price,
        price2 : this.price2,
        avilabilty : this.avilabilty,
        city : this.city,
        cityAR : this.cityAR,
        description : this.description ,
        descriptionAR : this.descriptionAR

    });

    }
      this.resetOffer();


  }
resetOffer (){
  this.id ='';
  this.name='';
  this.nameAR='';
  this.price=-1;
  this.price2=-1;
  this.city='';
  this.cityAR='';
  this.avilabilty='';
  this.description='';
  this.descriptionAR='';
}
  deleteOffer(id:string){
    const docInstance =  doc(this.firestore ,'Offers',id);
    deleteDoc(docInstance).then(() => {
      console.log('offer deleted')
    }).catch((err) => {
        console.log(err);

      });

    }

    fulFillData(item :any){
      this.id =item.id;
      this.name=item.Name;
      this.nameAR=item.NameAR;
      this.price=item.price;
      this.price2=item.price2;
      this.city=item.city;
      this.cityAR=item.cityAR;
      this.avilabilty=item.avilabilty;
      this.description=item.description;
      this.descriptionAR=item.descriptionAR;
    }

}
