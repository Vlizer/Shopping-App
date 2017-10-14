import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeService} from '../../shared/services/recipe.service';
import {Recipe} from '../../model/recipe.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit, OnDestroy {

  private _recipes: Recipe[] = [];
  private subscribtion: Subscription;

  constructor(private recipeService: RecipeService) {
  }

  get recipes(): Recipe[] {
    return this._recipes;
  }

  ngOnInit() {
    this.subscribtion = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this._recipes = recipes;
        }
      );
    this._recipes = this.recipeService.recipes;
  }


  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
