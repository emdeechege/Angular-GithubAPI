import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  user1: any = [];
  repos: any = [];
  userName: string;


  constructor(public apiservice: ApiService) {
    //obj data will return data from url called on by the fn defined in service
    this.apiservice.getUserDetails().subscribe(users => {
      this.user1 = users;
      console.log(this.user1);
    });
    this.apiservice.getRepos().subscribe(result => {
      this.user1 = result;
      console.log(this.user1);
    });

    searchUser() {
      this.apiService.updateUser(this.userName);

      this.apiService.apiProfile()
        .subscribe(users => {
          //console.log(res)
          this.user1 = users;
        })

      this.apiService.getRepos()
        .subscribe(result => {
          //console.log(data)
          this.repos = result;
        })
    }
  }
  ngOnInit() {

  }

}
