import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../model/ingredient.model';
import {ShoppingListService} from '../services/shopping.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private _ingredients: Ingredient[] = [];
  private _subscribtion: Subscription;

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit() {
    console.log('shopping-list');
    this._ingredients = this.shoppingService.ingredients;
    this._subscribtion = this.shoppingService.ingredientsChanged
      .subscribe(
        (ingredients) => {
          console.log(ingredients);
          this._ingredients = ingredients;
        }
      );
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  ngOnDestroy(): void {
    this._subscribtion.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }
}
