import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { ApiService } from './api.service';
import { RepoComponent } from './repo/repo.component'

const routes:Routes=[
{ path: "home", component: MasterComponent },
{path:'repos/:id',component:MasterComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
