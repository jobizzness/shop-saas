import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [AuthComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthenticationModule { }
