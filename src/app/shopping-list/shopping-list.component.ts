import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../model/ingredient.model';
import {ShoppingListService} from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private _ingredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit() {
    console.log('shopping-list');
    this._ingredients = this.shoppingService.ingredients;
    this.shoppingService.ingredientsChanged
      .subscribe(
        (ingredients) => {
          this._ingredients = ingredients;
        }
      );
  }


  get ingredients(): Ingredient[] {
    return this._ingredients;
  }
}
