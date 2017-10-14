import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './core/home/home.component';
import {ErrorComponent} from './core/error/error.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipes',
    loadChildren: './recipes/recipes.module#RecipesModule'
  },
  {
    path: 'shopping-list',
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
  },
  {
    path: 'profiles',
    loadChildren: './profiles/profiles.module#ProfilesModule'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
