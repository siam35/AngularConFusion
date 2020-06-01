import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import { promises } from 'dns';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
    // return new Promise(resolve=>{
    //   setTimeout(() => resolve(DISHES), 6000);
    // });
    //return Promise.resolve(DISHES);
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    // return new Promise(resolve=>{
    //   setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    // });
    //return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
    // return new Promise(resolve=>{
    //   setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    // });
    //return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }

}
