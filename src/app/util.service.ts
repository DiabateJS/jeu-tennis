import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getRandomNumber(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

}
