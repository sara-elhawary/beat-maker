import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getProducts(catsFilter?:string[] | any):Observable<any>{
    let prams = new HttpParams();
    if(catsFilter){
      prams = prams.append("categories",catsFilter.join(','));
    }
    return this._HttpClient.get(`http://localhost:3000/products`,{params:prams});
  }

}
