import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxAuthWso2Module} from '../../projects/ngx-auth-wso2/src/lib/ngx-auth-wso2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAuthWso2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
