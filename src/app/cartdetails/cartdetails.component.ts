import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import {Product} from '../productdetails/Product'

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  mail : any = '';
  productIdLst: any = [];

  productObj: Product[] = [];

  ngOnInit(): void {
    
    window.sessionStorage.setItem('mail', "bobo@wer79.com");
    this.mail = window.sessionStorage.getItem('mail')
    this.getProductIdInCart()
  }
  getProductIdInCart() {
    
    this.productService.getCartList(this.mail).subscribe((res: string[]) => {
      this.productIdLst = res
      console.log("List of Product in cart"+this.productIdLst)
    this.getProductObjectLst(this.productIdLst)
    })
    
    console.log(this.productIdLst)
  }

  getProductObjectLst(lst:any[]){
    console.log("In getProductObjectLSt")
    console.log("product list"+lst.length)
    console.log("Product ObjLst "+lst)
    var i:number;
    if(this.productObj.length != 0){
      this.productObj.length = 0;
    }
    for(i = 0; i< lst.length; i++) {
        console.log("getting product obj "+lst[i])
        this.productService.getProductObj(lst[i]).subscribe((res: Product) => {
          console.log("Product Obj "+ res)

          if(res != null)
            this.productObj.push(res)
        })
    }
  }

  removeFromCart(productId: string) {
    window.sessionStorage.setItem('mail', "bobo@wer79.com");
    this.mail = window.sessionStorage.getItem('mail')

    this.productService.removeFromCart(productId, this.mail).subscribe((res: string[]) => {
      this.getProductObjectLst(res)
    })
  }

  addToBuyLst(productId: string) {
    window.sessionStorage.setItem('mail', "bobo@wer79.com");
    this.mail = window.sessionStorage.getItem('mail')

    this.productService.addToBuyLst(productId, this.mail).subscribe((res:string) => {
      console.log(res)
    })
  }
}
