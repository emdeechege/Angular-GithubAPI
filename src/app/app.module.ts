import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { ApiService } from './api.service';
import { RepoComponent } from './repo/repo.component'
import { RoutingModule } from './routing/routing.module';
import { HighlightDirective } from './highlight.directive';





@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    RepoComponent,
    HighlightDirective,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
