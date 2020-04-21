import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  SERVER_URL: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getGoods() {
    return this.http.get(this.SERVER_URL + 'goods');
  }

  public getGood(goodId: string) {
    return this.http.get(`${this.SERVER_URL + 'goods'}/${goodId}`);
  }

  public createGood(good: {id: number, amount: number, price: number, title: string, description: string}) {
    return this.http.post(`${this.SERVER_URL + 'goods'}`, good);
  }

  public deleteGood(goodId: string) {
    return this.http.delete(`${this.SERVER_URL + 'goods'}/${goodId}`);
  }

  public updateGood(good: {id: number, amount: number, price: number, title: string, description: string}){
    return this.http.put(`${this.SERVER_URL + 'goods'}/${good.id}`, good)
}
}
