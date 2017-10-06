import {Ingredient} from './ingredient.model';

export class Recipe {
  constructor(private _name: string, private _description: string, private _imagePath: string, private _ingredients: Ingredient[]) {
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get imagePath(): string {
    return this._imagePath;
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }
}

