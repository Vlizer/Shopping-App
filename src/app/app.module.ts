import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DropdownDirective} from './directives/dropdown.directive';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {AppRoutingModule} from './app-routing.module';
import {RecipesListComponent} from './recipes/recipes-list/recipes-list.component';
import {RecipesDetailComponent} from './recipes/recipes-detail/recipes-detail.component';
import {RecipesDefaultComponent} from './recipes/recipes-default/recipes-default.component';
import {ShoppingListService} from './services/shopping.service';
import {RecipeService} from './services/recipe.service';
import {RecipeItemComponent} from './recipes/recipes-list/recipe-item/recipe-item.component';
import {FormsModule} from '@angular/forms';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ShoppingListComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesDefaultComponent,
    RecipeItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
