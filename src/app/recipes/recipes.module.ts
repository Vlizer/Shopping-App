import {NgModule} from '@angular/core';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipesDefaultComponent} from './recipes-default/recipes-default.component';
import {RecipesComponent} from './recipes.component';
import {RecipeItemComponent} from './recipes-list/recipe-item/recipe-item.component';
import {RecipesEditComponent} from './recipes-edit/recipes-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesDefaultComponent,
    RecipeItemComponent,
    RecipesEditComponent
  ],
  imports: [
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {
}
