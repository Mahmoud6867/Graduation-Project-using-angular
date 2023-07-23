import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent {

  ads!: Observable<any>;
  id : string = '';
  name !: string  ;
  nameAR !: string;
  img !: string;

  constructor(private firestore : Firestore){
    this.getAds();
  }

  getAds(){
    const collectionInstance = collection(this.firestore , "ads");
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);

      this.ads = collectionData(collectionInstance , {idField : 'id'})

    })
  }
  saveAds(){
    if (this.id == ''){
    const collectionInstance = collection (this.firestore ,"ads");
    if (this.name !=''&& this.img !='' && this.nameAR!=''){
      addDoc(collectionInstance , {
        name : this.name ,
        nameAR : this.nameAR ,
        img : this.img
      }).then(() => {
        console.log('ads saved');

      }).catch((err) => {
        console.log(err);

      });
    }
  }
    else {
      const docInstance = doc(this.firestore ,"ads" ,this.id);
    updateDoc(docInstance , {
      name : this.name ,
      nameAR : this.nameAR ,
      img : this.img
    });
    }
     this.resetData();


  }
  deleteAds(id:string){
    const docInstance = doc(this.firestore ,"ads" ,id);
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
