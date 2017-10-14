import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {RecipesDefaultComponent} from './recipes-default/recipes-default.component';
import {RecipesEditComponent} from './recipes-edit/recipes-edit.component';
import {AuthGuard} from '../auth/service/auth-guard.service';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {NgModule} from '@angular/core';

const recipesRoute: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesDefaultComponent
      },
      {
        path: 'new',
        component: RecipesEditComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: RecipesDetailComponent
      },
      {
        path: ':id/edit',
        component: RecipesEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoute)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class RecipesRoutingModule {

}
