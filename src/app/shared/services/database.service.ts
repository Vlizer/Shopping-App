import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

import {RecipeService} from './recipe.service';
import {Recipe} from '../model/recipe.model';

@Injectable()
export class DatabaseService {
  url = 'https://ng-recipes-book-1.firebaseio.com/data.json';

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {
  }

  saveRecipes() {
    this.httpClient.put(this.url, this.recipeService.getRecipes());
  }

  fetchRecipes() {
    this.getRecipes()
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        },
        (error) => console.log(error)
      );
  }

  private getRecipes() {
    return this.httpClient.get<Recipe[]>(this.url);
  }
}
