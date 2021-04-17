import { Component, OnInit } from '@angular/core';
import {Product} from '../products/Product'
import {ProductService} from '../product.service'

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private productService: ProductService ) { }

  product:any = {};

  ngOnInit(): void {

  }

  submitProduct(){
    this.product.ownerId =  "bobo@wer79.com"
    this.productService.addProduct(this.product);
  }

}
