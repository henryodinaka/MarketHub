import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingeditComponent implements OnInit {
@Output() ingredients = new EventEmitter<Ingredient>();
@ViewChild('amountInput') amount: ElementRef;
@ViewChild('nameInput') nameInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
onAdd() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
  this.ingredients.emit(newIngredient);
}
}
