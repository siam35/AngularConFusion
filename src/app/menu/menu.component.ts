import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import {DishService} from '../services/dish.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  
})

export class MenuComponent implements OnInit {

  dishes:Dish[] = DISHES;

  selectedDish : Dish;
 
  constructor(private dishServie:DishService) { }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

  ngOnInit(): void {
   this.dishes = this.dishServie.getDishes();
  }


}
