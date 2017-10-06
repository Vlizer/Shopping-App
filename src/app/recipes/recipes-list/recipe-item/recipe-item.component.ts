import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../model/recipe.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRecipeClicked() {
    console.log('recipe clicked');
    console.log(this.index);
    this.router.navigate(['recipes', this.index]);
  }
}
