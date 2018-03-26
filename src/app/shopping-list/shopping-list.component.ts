import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shoppinglist.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[];
private onIngredientAdded:Subscription;

  constructor(private shoppingListService:ShoppingListService) {}

ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
    this.onIngredientAdded=this.shoppingListService.newIngredientAdded.subscribe(
      (ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
      }
    );
  }

  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.onIngredientAdded.unsubscribe();
  }

}
