import { Category } from './../../models/category';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'products-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  cats:Category[]=[];
  constructor(private _productService:ProductsService, private _catService:CategoriesService) { 
    _productService.getProducts().subscribe((data)=>{
      this.products = data;
    })
    _catService.getCats().subscribe((data)=>{
      this.cats = data;
    })
  }
  catFilter(){
    const selectedCats = this.cats.filter(cat => cat.checked).map(cat=>cat.id);
      this._productService.getProducts(selectedCats).subscribe((data)=>{
        this.products = data;
      })
  }
  ngOnInit(): void {
  }
}