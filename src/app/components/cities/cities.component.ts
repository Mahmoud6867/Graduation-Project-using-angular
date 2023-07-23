import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {

  cities!: Observable<any>;
  id : string = '';
  name !: string  ;
  nameAR !: string;
  img !: string ;


  constructor(private firestore : Firestore){
    this.getCitiess();
  }

  getCitiess(){
    const collectionInstance = collection(this.firestore , "cities");
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);
      this.cities = collectionData(collectionInstance , {idField : 'id'});
    })

  }

  saveCity(){
    if (this.id == ''){
    const collectionInstance = collection (this.firestore ,"cities");
    if (this.name !=''&& this.img !=''&& this.nameAR!=''){
      addDoc(collectionInstance , {
        name : this.name ,
        nameAR : this.nameAR ,
        img : this.img
      }).then(() => {
        console.log('city saved');

      }).catch((err) => {
        console.log(err);

      });

    }
  } else {
    const docInstance = doc(this.firestore ,"cities" ,this.id);
    updateDoc(docInstance , {
      name : this.name ,
      nameAR : this.nameAR ,
      img : this.img
    });
  }
  this.resetData();

  }
  deleteCity(id:string){
    const docInstance = doc(this.firestore ,"cities" ,id);
    deleteDoc(docInstance).then(() =>{
      console.log("City deleted");
    }).catch((err)=>{
      console.log(err);
    })
  }

  resetData(){
    this.id ='';
    this.name = '';
    this.nameAR = '';
    this.img = '';
  }

  fulFillData(data :any){
    this.id = data.id;
    this.name = data.name;
    this.nameAR = data.nameAR;
    this.img = data.img;

  }

}
