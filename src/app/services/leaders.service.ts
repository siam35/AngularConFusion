import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import { promise } from 'protractor';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }

  getLeaders():Observable<Leader[]>{
    return of(LEADERS).pipe(delay(2000));
    // return new Promise(resolve=>{
    //   setTimeout(() => resolve(LEADERS), 2000);
    // });
    //return Promise.resolve(LEADERS);
  }

  getLeader(id:string):Observable<Leader>{
    return of(LEADERS.filter(l=>l.id===id)[0]).pipe(delay(2000));
    // return new Promise(resolve=>{
    //   setTimeout(() => resolve(LEADERS.filter(l=>l.id===id)[0]), 2000);
    // });
    //return Promise.resolve(LEADERS.filter(l=>l.id===id)[0]);
  }





  getFeaturedLeader():Observable<Leader>{
    return of(LEADERS.filter(l=>l.featured)[0]).pipe(delay(2000));
    // return new Promise(resolve=>{
    //   setTimeout(() => resolve(LEADERS.filter(l=>l.featured)[0]), 2000);
    // });
    //return Promise.resolve(LEADERS.filter(l=>l.featured)[0]);
  }
}
