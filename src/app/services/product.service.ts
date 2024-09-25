import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  

  getProducts(): Observable <Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`);
  }


  getProduct(id: string | number): Observable <Product> {
    return this.http.get<Product>(`${environment.baseUrl}/products/${id}`);
  }


  createProduct(product: Product): Observable <Product> {
    return this.http.post<Product>(`${environment.baseUrl}/products`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.baseUrl}/products/${product.id}`, product);
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${environment.baseUrl}/products/${product.id}`);
  }



}

