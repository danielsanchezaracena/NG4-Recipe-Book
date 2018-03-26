import { AuthGuard } from './../auth/auth-guard.service';
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const recipesRoutes:Routes=[
    {path:'',component:RecipesComponent,children:[
        {path:'new',component:RecipeEditComponent,canActivate:[AuthGuard] },
        {path:':id',component:RecipeDetailComponent},
        {path:'',component:NoRecipeSelectedComponent},
        {path:':id/edit',component:RecipeEditComponent,canActivate:[AuthGuard]},
      ]},
];

@NgModule({
    imports:[
        RouterModule.forChild(recipesRoutes),
      ],
      exports:[RouterModule],
      providers:[
          AuthGuard
      ]
})
export class RecipesRoutingModule{

}