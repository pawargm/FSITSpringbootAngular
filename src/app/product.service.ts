import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, private lservice: LoginService) { 

  }
/**   token:any = "Bearer "+ window.sessionStorage.getItem('token');
  options= {
    headers: new HttpHeaders({
      'Authorization': "Bearer "+ window.sessionStorage.getItem('token')
    })
  }*/
  
  getAllProducts():Observable<any>
  {
    let token = this.lservice.getToken();
    let tokenStr = 'Bearer '+token
    const headers = new HttpHeaders().set("Authorization", tokenStr)

    //return this.http.get("http://localhost:8079/product/getAllProd",{headers, responseType: 'text' as 'json'})
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

  addToCartUsr(productId: string, mail:any):Observable<any> {
    console.log("In product service")
    return this.http.get("http://localhost:8079/customer/addtocart?productid="+productId+"&mail="+mail)
  }

  getCartList(mail: string):Observable<any> {
    return this.http.get("http://localhost:8079/customer/getProductList?mail="+mail)
  }

  getProductObj(prodid: string):Observable<any> {
    return this.http.get("http://localhost:8079/product/getProdById?prodid="+prodid)
  }

  removeFromCart(prodid:string, mail:any): Observable<any> {
    return this.http.get("http://localhost:8079/customer/removefromcart?productid="+prodid+"&mail="+mail)
  }

  addToBuyLst(prodid:string, mail:any): Observable<any> {
    return this.http.get("http://localhost:8079/customer/addtoBuyLst?productid="+prodid+"&mail="+mail)
  }

  addProduct(product:any) {

    const options= {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

    this.http.post("http://localhost:8079/product/addProduct",product, options).subscribe(res=>{
      console.log(res);
    })
  }


}

