import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpclient: HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any>{
    console.log("inside service")
    alert("service");
    return this.httpclient.post<any>("http://localhost:8080/login",user)

  }
  public test():Observable<any>{
    return this.httpclient.get<any>("http://localhost:8080/hello")

  }
}
