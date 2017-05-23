import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {Recipe} from "./recipes/recipe.model";
import {RecipeService} from "./recipes/recipe.service";
import {AuthService} from "./auth/auth.service";

@Injectable()
export class ServerService {
  constructor(private http: Http,
              private  recipeService: RecipeService,
              private authService: AuthService) {

  }

  storeRecipes(servers: Recipe[]) {
    const headers = new Headers({'Content-Type': 'aplication/json'});
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-350dd.firebaseio.com/recipes.json?auth='+token,
      servers,
      {headers: headers});
  };

  getRecipes() {
    // return this.http.get('https://udemy-ng-http-39634.firebaseio.com/data.json')
    const token = this.authService.getToken();
    return this.http.get('https://ng-recipe-book-350dd.firebaseio.com/recipes.json?auth='+token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
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
          this.recipeService.setRecipes(recipes);
        }
      )
  };

  // getAppName() {
  //   return this.http.get('https://udemy-ng-http-39634.firebaseio.com/appName.json')
  //     .map(
  //       (response: Response) =>{
  //         return response.json();
  //       }
  //     );
  // }
  //

}