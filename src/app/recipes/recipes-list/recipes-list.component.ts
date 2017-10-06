import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../model/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {

  private _recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) { }

  get recipes(): Recipe[] {
    return this._recipes;
  }

  ngOnInit() {
    this._recipes = this.recipeService.recipes;
  }

}
