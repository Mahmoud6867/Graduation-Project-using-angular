import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email : string = "";
  password : string = "";


  constructor(private auth : AuthService){}

  ngOnInit(): void {
  }

  signIn(){
    if(this.email == ""){
      alert("Please enter your email")
      return;
    }else if(this.password == ""){
      alert("Please enter your password")
      return;
    }else{

      this.auth.signIn(this.email, this.password)
      this.email = "";
      this.password = "";
    }
  }


}
