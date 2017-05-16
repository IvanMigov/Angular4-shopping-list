import { Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',20)
      ]
    ),


    new Recipe(
      'Another Test Recipe',
      'Another  a test',
      'https://media2.s-nbcnews.com/j/MSNBC/Components/Video/201703/tdy_take_calories_170316.today-inline-vid-featured-desktop.jpg',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1)
      ]
    )
  ];
  constructor(private slService:ShoppingListService){

  }
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients)
  }

}


















