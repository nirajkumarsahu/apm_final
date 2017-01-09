import { Component, OnInit }  from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/product-list.component.html',
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    products: IProduct[];
 constructor(private _productService: ProductService) {

    }
    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products
                          );
    }
}
