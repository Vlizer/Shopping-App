import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../../services/shopping.service';
import {Ingredient} from '../../model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInputForm') nameInputForm: ElementRef;
  @ViewChild('amountInputForm') amountInputForm: ElementRef;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd() {
    this.shoppingService.addIngredient(
      new Ingredient(this.nameInputForm.nativeElement.value, this.amountInputForm.nativeElement.value));
  }

}
