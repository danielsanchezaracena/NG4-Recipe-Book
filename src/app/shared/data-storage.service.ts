import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
    constructor(private recipeService: RecipeService,
        private httpClient: HttpClient,
        private authService: AuthService) { }

    saveRecipesOnServer() {

        /*const headers=new HttpHeaders().set('Authorization','Bearer');
    
        return this.httpClient.put('https://ng-recipe-book-2911.firebaseio.com/recipes.json',
        this.recipeService.getRecipeList(),{
            params:new HttpParams().set('auth',token),
             //headers:headers
        });*/
        const req = new HttpRequest('PUT',
            'https://ng-recipe-book-2911.firebaseio.com/recipes.json',
            this.recipeService.getRecipeList(),
            {
                reportProgress: true
            }
        );
        return this.httpClient.request(req);
    }

    getRecipesFromServer() {
        //this.httpClient.get<Recipe[]>('https://ng-recipe-book-2911.firebaseio.com/recipes.json?auth='+token)
        this.httpClient.get<Recipe[]>('https://ng-recipe-book-2911.firebaseio.com/recipes.json', {
            observe: 'body'
        }
        )
            .map(
                (recipes) => {
                    
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.updateAllRecipes(recipes);
                }
            );
    }
}