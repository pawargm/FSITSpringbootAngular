import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 

  }
  getAllProducts():Observable<any>
  {
    return this.http.get("http://localhost:8079/product/getAllProd")
  }

  getProdByCategory(category :string):Observable<any>
  {
    return this.http.get("http://localhost:8079/product/getByCategory?category="+category)
  }

  getByProdName(product:any):Observable<any> {
    return this.http.get("http://localhost:8079/product/filterByName?name="+product.productName)
  }

  getProdByProdId(prodid :string):Observable<any>
  {
    return this.http.get("http://localhost:8079/product/getProdById?prodid="+prodid)
  }

}

