import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private productService: ProductService
  
  
  ) {}

  products: Product[] = [];

  ngOnInit() {
    this.getProducts()
    
  }


  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data; 
      console.log(data);
      
    });
  }




}
