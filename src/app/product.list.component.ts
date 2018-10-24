import { Component } from '@angular/core';
import { ProductListService } from './product.list.service'

@Component({
  selector: 'product-list',
  template: `
    <h1>Product list:</h1>
    <div id='productlist'>
        <div class='productbox' *ngFor="let product of products">{{ product.name }}</div>
    </div>
  `,
  providers: [ProductListService]
})

export class ProductListComponent {
    products = [];

    constructor(private _productService: ProductListService){}

    ngOnInit(){
        this._productService.getProducts()
        .subscribe(resProductsData => this.products = resProductsData);
    }
}