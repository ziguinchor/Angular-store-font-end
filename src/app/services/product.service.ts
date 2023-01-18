import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private url = `https://dummyjson.com/products`

  data: any [] = [];
    
  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<any> {
     return this.http.get(this.url);
     
  }


  getProductById(id: any) {
     return this.http.get(`${this.url}/${id}`)
  }

  

  



  

  

}
