import {RecipeService} from './recipe.service';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../../model/recipe.model';
import {Injectable} from '@angular/core';
import {AuthService} from '../../auth/service/auth.service';

@Injectable()
export class DatabaseService {
  url = 'https://ng-recipes-book-1.firebaseio.com/data.json';

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {
  }

  saveRecipes() {
    const token = this.authService.getToken();
    this.http.put(this.url + '?auth=' + token,
      this.recipeService.getRecipes())
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
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
    const token = this.authService.getToken();
    return this.http.get(this.url + '?auth=' + token)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw(error);
        }
      );
  }
}
