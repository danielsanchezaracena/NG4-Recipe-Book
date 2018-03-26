import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemId: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (id: number) => {
        this.editMode = true;
        this.editedItemId = id;
        this.editedItem = this.shoppingListService.getIngredient(id);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if (!this.editMode) {
      this.shoppingListService.addIngredient(
        new Ingredient(value.name, value.amount)
      );
    } else {
      this.shoppingListService.
      updateIngredient(this.editedItemId,new Ingredient(value.name,value.amount));
    }
    this.editMode=false;
    form.reset();
  }

  onClear(){
    this.editMode=false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemId);
    this.editMode=false;
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
