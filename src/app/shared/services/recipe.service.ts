import {Injectable} from '@angular/core';
import {Recipe} from '../model/recipe.model';
import {ShoppingListService} from './shopping.service';
import {Ingredient} from '../model/ingredient.model';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {
  }

  recipesChanged = new Subject<Recipe[]>();
  private _recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!!',
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'A Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Burger_King_-_Angus_XT_Burger.tiff/lossless-page1-440px-Burger_King_-_Angus_XT_Burger.tiff.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  sendIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => this.shoppingListService.addIngredient(ingredient));
  }

  getRecipe(index: number): Recipe {
    return this._recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
    this.recipesChanged.next(this._recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this._recipes[index] = recipe;
    this.recipesChanged.next(this._recipes.slice());
  }

  deleteRecipe(index: number) {
    this._recipes.splice(index, 1);
    this.recipesChanged.next(this._recipes.slice());
  }

  getRecipes() {
    return this._recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this._recipes = recipes;
    this.recipesChanged.next(recipes.slice());
  }
}
