import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Sarma',
      'Best meal in the world',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6EiVkXNB_LsO8SC09h41wTviq7MIVkrA2__qqm93GQw&s'
    ),
    new Recipe(
      'Creamy risotto with chicken',
      ' With eggplant and zucchini',
      'https://podravkaiovariations.blob.core.windows.net/b106cc8a-921e-11ee-a846-f62fb7f7e1fe/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp'
    ),
  ];
  constructor() {}
  ngOnInit(): void {}
}
