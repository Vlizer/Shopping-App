import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../../shared/services/shopping.service';
import {Ingredient} from '../../shared/model/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editedItemIndex: number;

  @ViewChild('form') form: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingService.getIngredient(index);
          this.form.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onSubmit() {
    const ingredient = new Ingredient(this.form.value.name, this.form.value.amount);
    if (!this.editMode) {
      this.shoppingService.addIngredient(ingredient);
    } else {
      this.shoppingService.updateIngredient(this.editedItemIndex, ingredient);
    }
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingService.removeIngredient(this.editedItemIndex);
      this.onClear();
    }
  }

  onClear() {
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
