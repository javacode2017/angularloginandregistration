import { Component, OnInit } from '@angular/core';
import  { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';


@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
   user = new User();
  constructor(private _service: RegistrationService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => console.log("response success"),
      error => console.log("error occuring while interacting")
      )
  }

  test(){
    this._service.test().subscribe(
      data => console.log("response success"),
      error => console.log("error occuring while interacting")
      )
  }

}
