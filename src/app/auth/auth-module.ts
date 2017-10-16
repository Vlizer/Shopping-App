import {NgModule} from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {

}
