import { LoggingInterceptor } from './../shared/logging.interceptor';
import { AuthInterceptor } from './../shared/auth.interceptor';
import { AuthGuard } from './../auth/auth-guard.service';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';
import { ShoppingListService } from './../shopping-list/shoppinglist.service';
import { HeaderComponent } from './Header/Header.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations:[
        HomeComponent,
        HeaderComponent
    ],
    imports:[
        SharedModule,
        AppRoutingModule
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
        AuthGuard,
        {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
        {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true}
    ]
})
export class CoreModule{


}