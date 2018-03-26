import { DataStorageService } from './../shared/data-storage.service';
import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shoppinglist.service';
import { Subject } from 'rxjs/Subject';
import {Response} from '@angular/http'


@Injectable()
export class RecipeService {
newRecipeAdded=new Subject<Recipe[]>();
private  recipes:Recipe[]=[
  new Recipe('Chicken with Cashew Nuts','This is my favorite food','http://keeprecipes.com/sites/keeprecipes/files/imagecache/recipe_large/chicken-cashewnuts-36.jpg',
  [
    new Ingredient('Chicken pounds',1),
    new Ingredient('Cashew Nuts Bag',3)
  ]),
    new Recipe('Spaghetti Alfredo','My second favorite food','http://delightsofculinaria.com/wp-content/uploads/2014/01/DSC_5428-2-560x363.jpg',
      [
        new Ingredient('Spaghetti pounds',2),
        new Ingredient('Alfredo Sauce Bottle',1)
      ]
      )];

constructor(private slService:ShoppingListService){}

getRecipeList(){
  return this.recipes.slice();
}

getRecipe(index:number){
return this.recipes[index];
}

addIngredientsToShoppingList(ingredients:Ingredient[]){
this.slService.addIngredients(ingredients);
}

addRecipe(recipe:Recipe){
this.recipes.push(recipe);
this.newRecipeAdded.next(this.recipes.slice());
}

updateRecipe(index:number,newRecipe:Recipe){
this.recipes[index]=newRecipe;
this.newRecipeAdded.next(this.recipes.slice());
}

deleteRecipe(index:number){
  this.recipes.splice(index,1);
  this.newRecipeAdded.next(this.recipes.slice());
}

updateAllRecipes(recipes:Recipe[]){
  this.recipes=recipes;
  this.newRecipeAdded.next(this.recipes.slice());
}

}
