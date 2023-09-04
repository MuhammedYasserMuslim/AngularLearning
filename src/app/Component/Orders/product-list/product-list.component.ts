import {Component, OnInit} from '@angular/core';
import {IProudct} from "../../../Model/iproudct";
import {ICategory} from "../../../Model/icategory";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{


  catList:ICategory[];


  prdList:({ quantity: number; price: number; imageUrl: string; name: string; id: number; categoryId: number } | {
    quantity: number;
    price: number;
    imageUrl: string;
    name: string;
    id: number;
    categoryId: number
  } | { quantity: number; price: number; imageUrl: string; name: string; id: number; categoryId: number })[];

  orderTotalPrice:number=0;
  selectionId: number = 0;
  constructor() {
    this.catList=[
      {id:1 ,name :"Laptop"},
      {id:2 ,name :"Tablets"},
      {id:3 ,name :"Mobiles"}
    ]
    this.prdList=[
      {
        id:100,
        name:'Lenovo',
        price:100,
        quantity:1,
        imageUrl : 'https://picsum.photos/200/100',
        categoryId:1
      },
      {
        id:200,
        name:'Acer',
        price:200,
        quantity:2,
        imageUrl : 'https://picsum.photos/200/100',
        categoryId:1
      },
      {
        id:300,
        name:'Aplle',
        price:300,
        quantity:0,
        imageUrl : 'https://picsum.photos/200/100',
        categoryId:1
      },

    ];
  }
  ngOnInit(): void {
  }

  buy(price:number ,count :any) {

    this.orderTotalPrice = +count*price;

  }

  cahngeD() {
    this.selectionId=1;
  }
}
