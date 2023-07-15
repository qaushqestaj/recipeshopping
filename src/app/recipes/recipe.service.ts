import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Pits Burger',
  //     'A mixture of cheese and Pits meat - simply delicious!',
  //     'https://realfood.tesco.com/media/images/1400x919-Tesco-DinnerFor2-FridgeRaidFeasts-16024-BaconMushroomBreakfastHash-2ae2ffa1-7392-4e89-80f6-be2d7dd16de3-0-1400x919.jpg',
  //     [new Ingredient('Meat', 2), new Ingredient('Cheese', 2)]
  //   ),
  //   new Recipe(
  //     'Cheesy Burger',
  //     'The name says it all.',
  //     'https://realfood.tesco.com/media/images/1400x919-Tesco-DinnerFor2-FridgeRaidFeasts-16024-BaconMushroomBreakfastHash-2ae2ffa1-7392-4e89-80f6-be2d7dd16de3-0-1400x919.jpg',
  //     [new Ingredient('Cheese', 2), new Ingredient('Another kind of cheese', 3)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slcService: ShoppingService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slcService.addIgredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
