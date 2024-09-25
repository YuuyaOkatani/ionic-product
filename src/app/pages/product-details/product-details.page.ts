import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage  implements OnInit{

  constructor(private productService : ProductService, private activatedRoute: ActivatedRoute) { }

  products: Product[] = []
  product: Product = {} as Product

  ngOnInit(): void {
    this.loadProducts()
    this.getProduct();
      
  }


  loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      console.log(this.products);
      
    }); 
  }


  getProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    
    if(id){
      this.productService.getProduct(id).subscribe(product => {
      
        this.product = product;
        
      });
      
    }
  }

  
  
  


  

}
