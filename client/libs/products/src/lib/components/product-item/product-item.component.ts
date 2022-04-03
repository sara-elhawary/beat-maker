import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
@Component({
  selector: 'products-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  
 @Input() product?: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
