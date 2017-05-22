import {Component, OnInit} from '@angular/core';
import {ServerService} from "../servers.service";
import {RecipeService} from "../recipes/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private serverService: ServerService,
              private  recipeService: RecipeService) {
  }

  ngOnInit() {
  }
  saveData(){
    const recipes = this.recipeService.getRecipes();
    this.serverService.storeRecipes(recipes)
      .subscribe(
        (response)=>{
          console.log(response);
        },
        (error)=>{
          console.log(error);
        }
      );
  }
  fetchData(){
    console.log('fetchData');
    this.serverService.getRecipes();

  }

}
