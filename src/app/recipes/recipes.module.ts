import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from "@angular/core";
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeListComponent,
        NoRecipeSelectedComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeDetailComponent
    ],
imports:[
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
]
})
export class RecipesModule{

}