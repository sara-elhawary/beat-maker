import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Category} from '../models/category'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class CategoriesService {

  constructor(private httpClient:HttpClient) { }


  getCategories():Observable <Category[]>{
    return this.httpClient.get<Category[]>("http://localhost:3000/api/v1/cat")
  }
  createCategories(cateory:Category){
    return this.httpClient.post("http://localhost:3000/api/v1/cat",cateory)
  }
}
