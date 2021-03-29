import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import {Product} from './Product';

import {DataService} from '../data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private dataService: DataService) { }

  productList: any

  selectedCategory: string = '';

  categorys: any = [
    'NoFilter',
    'electronics',
    'fashion',
    'sports'
  ]

  product:any = {};

  ngOnInit(): void {
    this.getProductList()
  }

  getProductList() {
    this.productService.getAllProducts().subscribe((res: Product[]) => {
      this.productList = res
    })
    console.log(this.productList)
  }

  radioChangeHandler (event : any) {
    this.selectedCategory = event.target.value;

    if(this.selectedCategory == "NoFilter") {
      this.getProductList()
    } else {
        this.productService.getProdByCategory(this.selectedCategory).subscribe((res: Product[]) => {
          this.productList = res})
      }
    console.log(this.productList)
  }

  submitPost() {
    this.productService.getByProdName(this.product).subscribe((res: Product[]) => {
      this.productList = res
    })
    console.log(this.productList)
  }

  setProductId(productId: string) {
    this.dataService.setProductId(productId);
  }

}
