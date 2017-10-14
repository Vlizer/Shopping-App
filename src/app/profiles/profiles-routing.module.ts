import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile.component';

const shoppingListRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfilesRoutingModule {

}
