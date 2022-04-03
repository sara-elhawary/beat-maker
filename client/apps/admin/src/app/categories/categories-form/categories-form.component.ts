import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '@client/products';

@Component({
  selector: 'client-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  

  constructor(private categoriesService:CategoriesService,private fb:FormBuilder) { }
  catForm = this.fb.group({
    name: [''],
  })

  ngOnInit(): void {
    this.catForm = new FormGroup({
      catName: new FormControl(' ',Validators.required),
    });
  }

  addCategory(){
    console.log(this.catForm.valid)
    // if(this.categoryForm.invalid){
    //  return;
    // }

  }

}
