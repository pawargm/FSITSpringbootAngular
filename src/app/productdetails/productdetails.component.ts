import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { ProductService} from '../product.service';
import {Product} from './Product'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, private productService: ProductService) { }

  product:any = {};
  prodId: any = "";

  ngOnInit(): void {
   // this.prodId = this._Activatedroute.snapshot.paramMap.get("id");
   this._Activatedroute.paramMap.subscribe(params => { 
    this.prodId = params.get('id'); 
    }); 
   
   this.getProdLstById()
  }
  getProdLstById() {
    this.productService.getProdByProdId(this.prodId).subscribe((res: Product) => {
      this.product = res
    })
    console.log(this.product)
  }

}
