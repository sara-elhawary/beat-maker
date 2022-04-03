import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  constructor(private _productService:ProductsService) { 
    _productService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }

  ngOnInit(): void {
  }

}
