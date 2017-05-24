import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import {AuthService} from "../auth/auth.service";
import {ServerService} from "../servers.service";
import {RecipeService} from "../recipes/recipe.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@NgModule({
  declarations:[
    HeaderComponent,
    HomeComponent
  ],
  imports:[
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [ShoppingListService,RecipeService,ServerService,AuthService],

})
export class CoreModule{

}