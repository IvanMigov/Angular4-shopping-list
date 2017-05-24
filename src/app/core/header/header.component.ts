import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../servers.service";
import {RecipeService} from "../../recipes/recipe.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private serverService: ServerService,
              private  recipeService: RecipeService,
              private authService: AuthService) {
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
  onLogout(){
    this.authService.logout();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
