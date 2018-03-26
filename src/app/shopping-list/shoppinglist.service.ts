import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';
export class ShoppingListService {
  newIngredientAdded =new Subject<Ingredient[]>();
  startedEditing=new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  updateIngredient(id:number,newIngredient:Ingredient){
     this.ingredients[id]=newIngredient;
     this.newIngredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.newIngredientAdded.next(this.ingredients.slice());
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  addIngredient(newIngredient:Ingredient) {
    this.ingredients.push(newIngredient);
    this.newIngredientAdded.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.newIngredientAdded.next(this.ingredients.slice());
  }
}
