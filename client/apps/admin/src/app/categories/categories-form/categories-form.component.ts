import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '@client/products';

@Component({
  selector: 'client-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  catForm:FormGroup=new FormGroup({
    name: new FormControl(' ',[Validators.required,Validators.minLength(3)]),
  });

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
  }

  addCategory(){
    // console.log(this.catForm.value)
    // if(!this.catForm.valid)return;
    console.log(this.catForm.value)
    // }
  }

}
