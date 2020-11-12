import { Component, OnInit } from '@angular/core';
import  { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';


@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
   user = new User();
   msg = '';
  constructor(private _service: RegistrationService, private _router :Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {console.log("response success"),
                this._router.navigate(['/loginsuccess'])},
      error =>{console.log("error occuring while interacting"),
              this.msg='Bad Credentials';
              }
      )
  }

  gotoregistration(){    
    this._router.navigate(['/registration']);
  }
  


  test(){
    this._service.test().subscribe(
      data => console.log("response success"),
      error => console.log("error occuring while interacting")
      )
  }

}
