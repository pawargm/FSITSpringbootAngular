import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  prodId: string = "";

  constructor() { }

  setProductId(productId : string) {
    this.prodId = productId
  }

  getProductId():string {
    return this.prodId
  }
}
