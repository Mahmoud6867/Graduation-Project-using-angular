import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router :Router) { }

  //Sign In
  signIn(email:string, password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem("token","true");
      this.router.navigate(['adminPanel/home']);
    },err =>{
      alert(err.message);
      this.router.navigate(['signIn']);
    })
  }

  //Sign Up
  signUp(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert("Successfully signed up")
      this.router.navigate(['adminPanel/signUp']);
    },err=>{
      alert(err.message);
      this.router.navigate(['adminPanel/signUp']);
    })
  }

  //Sign Out
  signOut(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem("token");
      this.router.navigate(['signIn']);
      alert("You signed out")
    },err=>{
      alert(err.message);
    })
  }
}
