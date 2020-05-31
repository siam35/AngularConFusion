import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import { promises } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // getDishes():Dish[]{
  //   return DISHES;
  // }

  // getDish(id:string):Dish{
  //   return DISHES.filter(d=>d.id===id)[0];
  // }
  // getFeaturedDish():Dish{
  //   return DISHES.filter(d=>d.featured)[0];
  // }

  getDishes(): Promise<Dish[]> {
    return new Promise(resolve=>{
      setTimeout(() => resolve(DISHES), 6000);
    });
    //return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<Dish> {
    
    return new Promise(resolve=>{
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
    //return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve=>{
      setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });
    //return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }

}
