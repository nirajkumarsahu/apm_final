import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IProduct } from './product';
@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';
    constructor(private _http: Http) { }
    getProducts(){
       return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json());       
    }
      getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }
}