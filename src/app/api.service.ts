import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
userName: string;
apiUrl: string="https://api.github.com/users/";
apiKey: string="1abd407493bf913907152b8557d281e9a561807a"

  constructor(public http: HttpClient)
   { this.userName= "emdeechege"}

   updateUser(userName: string){
     this.userName = userName;

   }

  getUserDetails(){
    return    this.http.get(this.apiUrl + this.userName + "?access_token=" + this.apiKey)
  }
  getRepos(){
    return this.http.get(this.apiUrl + this.userName + "/repos" + "?access_token=" + this.apiKey)
  }

}
