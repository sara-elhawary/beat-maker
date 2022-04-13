import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'products-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:string = '';
  product:Product = new Product();
  constructor(private _productService:ProductsService,private _activatedRoute:ActivatedRoute) {
    this.id=_activatedRoute.snapshot.params['id'];
    _productService.getProductDetails(this.id).subscribe((data)=>{
      this.product = data;
    })
   } 

  ngOnInit(): void {

  }


}
