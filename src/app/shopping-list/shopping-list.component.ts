import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredient: Ingredients[]=[
  new Ingredients('りんご',5),
  new Ingredients('桃',10),
];

constructor(){

}
}
