import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  user1: any = [];
  repos: any = [];
  userName: string;
  apiUrl: string="https://api.github.com/u";
  apiKey: string="1abd407493bf913907152b8557d281e9a561807a"

  constructor(public apiservice: ApiService, public http: HttpClient) {
    //obj data will return data from url called on by the fn defined in service
    this.apiservice.getUserDetails().subscribe(users => {
      this.user1 = users;
      console.log(this.user1);
    });
    this.apiservice.getRepos().subscribe(result => {
      this.repos = result;
      console.log(this.repos);
    });
  }

  performSearch(userName: HTMLInputElement): void {//collects user data and adds the input the the api link and returns a new variable with the results. The results overide the trending gifs automatically.
      var apiLink = (this.apiUrl + "userName" + "?access_token=" + this.apiKey);

      this.http.get(apiLink).subscribe(response =>{
          this.user1 = response;
          console.log(this.user1);
        });
    }

  ngOnInit() {

  }

}
