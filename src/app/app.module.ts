import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { DataStorageService } from './shared/data-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HeaderComponent} from './core/Header/Header.component';
import {ShoppingListService} from './shopping-list/shoppinglist.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RecipeService} from './recipes/recipe.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
 HttpClientModule,
    AppRoutingModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
