import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from './profile.component';
import {ProfilesRoutingModule} from './profiles-routing.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    ProfilesRoutingModule
  ]
})
export class ProfilesModule {

}
