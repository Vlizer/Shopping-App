import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Recipe} from '../../shared/model/recipe.model';
import {RecipeService} from '../../shared/services/recipe.service';
import {ShoppingListService} from '../../shared/services/shopping.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  private _recipe: Recipe;
  private index: number;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _recipeService: RecipeService,
              private _shoppingService: ShoppingListService) {
  }

  get recipe(): Recipe {
    return this._recipe;
  }

  ngOnInit() {
    this._route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this._recipe = this._recipeService.getRecipe(this.index);
        }
      );
  }

  sendToShoppingList() {
    this._shoppingService.addIngredients(this._recipe.ingredients);
  }

  onDeleteRecipe() {
    this._recipeService.deleteRecipe(this.index);
    this._router.navigate(['..'], {relativeTo: this._route});
  }
}
