import {Ingredient} from '../../model/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  getIngredient(index: number) {
    return this._ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.next(this._ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.next(this._ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this._ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this._ingredients.slice());
  }

  removeIngredient(index: number) {
    this._ingredients.splice(index, 1);
    this.ingredientsChanged.next(this._ingredients.slice());
  }
}
