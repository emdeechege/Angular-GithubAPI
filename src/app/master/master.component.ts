import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  users = [];


  constructor(public apiservice: ApiService, public http: HttpClient) {
    // this.getUser();


  // getUser() {
    this.apiservice.getUserDetails().subscribe(retObject => {
      //obj data will return data from url called on by the fn defined in service
      // this.users = userObject;
      console.log(retObject);
    });
  }
  ngOnInit() {

  }

}
