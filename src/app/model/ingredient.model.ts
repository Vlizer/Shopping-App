export class Ingredient {

  constructor(private _name: string, private _amount: number) {
  }

  get name(): string {
    return this._name;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  set name(value: string) {
    this._name = value;
  }
}
