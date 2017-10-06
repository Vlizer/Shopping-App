import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Recipe} from '../../model/recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {ShoppingListService} from '../../services/shopping.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  private _recipe: Recipe;

  constructor(private _route: ActivatedRoute,
              private _recipeService: RecipeService,
              private _shoppingService: ShoppingListService) { }

  get recipe(): Recipe {
    return this._recipe;
  }

  ngOnInit() {
    const index = this._route.snapshot.params['id'];
    this._recipe = this._recipeService.getRecipe(index);


    this._route.params
      .subscribe(
        (params: Params) => {
          this._recipe = this._recipeService.getRecipe(params['id']);
        }
      );
  }

  sendToShoppingList() {
    this._shoppingService.addIngredients(this._recipe.ingredients);
  }
}
