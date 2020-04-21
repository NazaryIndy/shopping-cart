import { Component, OnInit } from '@angular/core';
import { GoodsService } from './goods.service';

@Component({
  selector: 'wis-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  goods: any[] = [];
  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    this.goodsService.getGoods().subscribe((data : any[])=>{
        console.log(data);
        this.goods = data;
    })
  }

}
