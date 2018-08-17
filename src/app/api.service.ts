import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getUserDetails(){
    return    this.http.get('https://api.github.com/users/emdeechege?access_token=1abd407493bf913907152b8557d281e9a561807a')
  }
}
