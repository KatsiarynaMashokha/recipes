import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">


    <h1>Recipe Box</h1>
    <li *ngFor='let myRecipe of recipes'><a (click)="changeVisibleArrays(myRecipe)">{{myRecipe.name}}</a>
      <div class="box" *ngIf="myRecipe.visibleArrays">


      <h4>Ingredients</h4>
      <a (click)="editIngred(myRecipe)">Edit<span class="glyphicon glyphicon-pencil"></span></a>
      <div class="form-group">
        <label for="editIngredients"> Edit </label>
        <!--<input id="editIngredients" type="text" value={{myRecipe.ingredients}}>-->
         <!--<input [value]="myRecipe.ingredients" (input)="editIngredients = $event.target.value" type="text">-->
         <input [(ngModel)]="myRecipe.ingredients" type="text">
      </div>
      <button (click)="updateIngred(myRecipe)">Update</button>
      <li *ngFor='let ingred of myRecipe.ingredients'>{{ingred}}</li>
      </div>
  <div class="box" *ngIf="myRecipe.visibleArrays">


  <h4>Directions</h4>
  <ol>
      <li *ngFor='let direction of myRecipe.directions'>{{direction}}</li>
      </ol>
  </div>
  </li>
  </div>
  `
})


export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Omelette', ['eggs', 'mushrooms', 'bell pepper'], ['Scramble eggs', 'Put eggs in pan', 'Mix in chopped veggies']),
    new Recipe('Muddy Buddies', ['Rice chex', 'Powdered sugar', 'Chocolate', 'Butter'], ['Melt chocolate with butter', 'Pour melted chocolate onto chex', 'Mix chex and chocolate until evenly coated', 'Pour on powdered sugar', 'Mix all until covered', 'Put in fridge']),
    new Recipe('Nachos', ['Chips', 'Beans', 'Cheese', 'Jalapeno'], ['Spread refried beans on chips', 'Add cheese on top', 'Place a couple of jalapenos on top of cheese', 'Microwave'])
  ];
  selectedRecipe: Recipe = this.recipes[0];

  updateRecipe(clickedRecipe: Recipe) {
    this.selectedRecipe = clickedRecipe;
  }

  changeVisibleArrays(clickedRecipe: Recipe){
    clickedRecipe.visibleArrays = !clickedRecipe.visibleArrays;
  }

  editIngred(clickedRecipe: Recipe){
    $('.form-group').toggle();
  }

  updateIngred(clickedRecipe: Recipe){
    clickedRecipe.ingredients = $('#editIngredients').val().split(",");
    $('.form-group').hide();
  }
}

export class Recipe {
  visibleArrays: boolean = false;



  constructor(public name: string, public ingredients: String[], public directions: String[]) {}
}
