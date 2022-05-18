import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getRandomNumber(max: number): number {
    return Math.floor((Math.random() * max) + 1);
  }

}
