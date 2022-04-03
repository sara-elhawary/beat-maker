import { Component, OnInit } from '@angular/core';
import {Category,CategoriesService} from '../../../../../../libs/products/src/index';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

constructor(private categoriesService:CategoriesService) { }
 
categories:Category[]=[]

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(cats=>{
      this.categories=cats;
    })
  }
 
}