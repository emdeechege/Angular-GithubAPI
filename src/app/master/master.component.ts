import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  user1: any =[];


  constructor(public apiservice: ApiService){

      this.apiservice.getUserDetails().subscribe(users => {
      //obj data will return data from url called on by the fn defined in service
      this.user1 = users;
      console.log(this.user1.login);
    });
  }
  ngOnInit() {

  }

}
