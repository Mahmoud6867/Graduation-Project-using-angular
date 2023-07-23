import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  email : string = "";
  password : string = "";


  constructor(private auth : AuthService){}

  ngOnInit(): void {
  }

  signUp(){
    if(this.email == ""){
      alert("Please enter your email")
      return;
    }else if(this.password == ""){
      alert("Please enter your password")
      return;
    }else{

      this.auth.signUp(this.email, this.password)
      this.email = "";
      this.password = "";
    }
  }

}
