import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Test Recipe 2', 'this is a test desc 2', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2017/12/Vegetable-stew-recipe-920x605.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
