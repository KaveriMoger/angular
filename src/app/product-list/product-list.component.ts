import { Component, OnInit } from '@angular/core';
import { products } from '../product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products
  constructor() { }

  ngOnInit() {
  }

  share(){
    window.alert('product has been shared');
  }

  notifyMe() {
    window.alert("product has been arrived")
  }

}
