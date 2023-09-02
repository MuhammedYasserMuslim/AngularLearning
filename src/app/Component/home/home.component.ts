import {Component, OnInit} from '@angular/core';
import {StoreData} from "../../ViewModels/store-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  storeInfo:StoreData;
  isShow:boolean=true;
  constructor() {
    this.storeInfo = new StoreData("ISC","https://picsum.photos/200/300",['Cairo','Alex','Zagazig'])
  }

  ngOnInit(): void {
  }

  isShowImage() {
    this.isShow = !this.isShow;
  }
}
