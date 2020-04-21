import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let  goods =  [
     {  id:  1,  title:  'PO1', amount: 100, price: 1000, description: 'Insurance policy number PO1' },
     {  id:  2,  title:  'PO2', amount: 200, price: 1000, description: 'Insurance policy titleber PO2' },
     {  id:  3,  title:  'PO3', amount: 30, price: 2000, description: 'Insurance policy titleber PO3' },
     {  id:  4,  title:  'PO4', amount: 40, price: 3000, description: 'Insurance policy number PO4' }
    ];

    return {goods};

   }

}
