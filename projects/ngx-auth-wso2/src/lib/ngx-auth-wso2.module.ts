import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AUTH_SERVICE, AuthModule, PROTECTED_FALLBACK_PAGE_URI, PUBLIC_FALLBACK_PAGE_URI } from 'ngx-auth';
import { NgxAuthWso2Service } from './ngx-auth-wso2.service';

@NgModule({
  imports: [AuthModule, CommonModule],
  declarations: [LoginComponent],
  providers: [
    { provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/' },
    { provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/login' },
    { provide: AUTH_SERVICE, useClass: NgxAuthWso2Service }
  ]
})
export class NgxAuthWso2Module {}
