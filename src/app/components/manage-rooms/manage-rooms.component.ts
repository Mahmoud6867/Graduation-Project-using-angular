import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.scss']
})
export class ManageRoomsComponent {


  room = {
    id:"",
    address   : '',
    addressAR : '',
    around : '',
    aroundAR : '',
    beds : 0 ,
    city : '',
    cityAR : '',
    discription : '',
    discriptionAR : '' ,
    distance : 0,
    evaluation : 0,
    img1 : '',
    img2 : '' ,
    img3 : '' ,
    img4 : '' ,
    img5 : '' ,
    location  : '' ,
    name : '' ,
    nameAR : '' ,
    price : 0 ,
    rate : ''
  };
  cities!: Observable<any>;
  city !: Observable<any>;
  res !:{}|undefined;

  constructor(private firestore :Firestore){
       this.getCitiess();
  }
  filterCity !: string ;
//   if(ID==""){
//     let item=await addDoc(collection(firestore,"Items"),data);
// }else{
//     updateDoc(doc(firestore,"Items",ID),data);

// }
// deleteInputValue()

// }
  saveRoom(){
    if(this.room.id==""){
      const collectionInstance = collection (this.firestore ,this.room.city);
      if (this.room.address !=''&& this.room.addressAR !=''&& this.room.around !=''&& this.room.aroundAR !=''&&
          this.room.beds !=0 && this.room.city !=''&& this.room.cityAR !=''&& this.room.discription !=''&&
          this.room.discriptionAR !='' && this.room.distance !=0 && this.room.evaluation != 0 && this.room.img1 !=''&&
          this.room.img2 !=''&& this.room.img3 !=''&& this.room.img4 !=''&& this.room.img5 !=''&& this.room.location !=''&&
          this.room.name !=''&& this.room.nameAR !=''&& this.room.price !=0 && this.room.rate !=''){
        addDoc(collectionInstance , this.room).then(() => {
          console.log('Room saved');

        }).catch((err) => {
          console.log(err);

        });}
    }else{

      updateDoc(doc(this.firestore,this.room.city,this.room.id),this.room);
    }

      this.resetRoom();


  }

  getCitiess(){
    const collectionInstance = collection(this.firestore , "cities");
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);
      this.cities = collectionData(collectionInstance , {idField : 'id'});
    })

  }
  getCity(){
    const collectionInstance = collection(this.firestore , this.filterCity);
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);
      this.city = collectionData(collectionInstance , {idField : 'id'});
    })
  }

  deleteRoom(id:string){
    const docInstance = doc(this.firestore ,this.filterCity ,id);
    deleteDoc(docInstance).then(() =>{
      console.log("City deleted");
    }).catch((err)=>{
      console.log(err);
    })
  }

  resetRoom(){
    this.room = {
      id:"",
      address: '',
      addressAR: '',
      around: '',
      aroundAR: '',
      beds: 0,
      city: '',
      cityAR: '',
      discription: '',
      discriptionAR: '',
      distance: 0,
      evaluation: 0,
      img1: '',
      img2: '',
      img3: '',
      img4: '',
      img5: '',
      location: '',
      name: '',
      nameAR: '',
      price: 0,
      rate: '',
    };
  }

  async fillFields(id:string){
    var item= doc(this.firestore ,this.filterCity ,id);
    try {
      const docSnap = await getDoc(item);
      console.log(docSnap.data());
      // this.res =docSnap!.data();
      var itemData=docSnap!.data();
      this.room = {
        id:docSnap!.id,
        address:itemData!["address"],
        addressAR:itemData!["addressAR"],
        around:itemData!["around"],
        aroundAR: itemData!["aroundAR"],
        beds: itemData!["around"],
        city: itemData!["city"],
        cityAR:itemData!["cityAR"],
        discription: itemData!["discription"],
        discriptionAR: itemData!["discriptionAR"],
        distance: itemData!["distance"],
        evaluation: itemData!["evaluation"],
        img1: itemData!["img1"],
        img2: itemData!["img2"],
        img3: itemData!["img3"],
        img4: itemData!["img4"],
        img5: itemData!["img5"],
        location: itemData!["location"],
        name: itemData!["name"],
        nameAR: itemData!["nameAR"],
        price: itemData!["price"],
        rate: itemData!["rate"],
      };
  } catch(error) {
      console.log(error)
  }



   }
}
