import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }

  getLeaders():Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }

  getLeader(id:string):Promise<Leader>{
    return Promise.resolve(LEADERS.filter(l=>l.id===id)[0]);
  }





  getFeaturedLeader():Promise<Leader>{
    return Promise.resolve(LEADERS.filter(l=>l.featured)[0]);
  }
}
