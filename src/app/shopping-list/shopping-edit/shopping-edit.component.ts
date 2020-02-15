import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  // @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  ingredient = '';
  amount = 0;



  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    // const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    // this.ingredientAdded.emit(newIngredient);
    const newIngredient = new Ingredient(this.ingredient, this.amount);
    this.ingredientAdded.emit(newIngredient);
  }
}
