import { CartService } from './../../services/cart.service';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


   products: any
   carts: any [] = []
   status: boolean = true
  

   
   constructor( 
                private productService: ProductService,
                private cartService: CartService
                ) {}
  

  ngOnInit(): void {
   
       this.getProducts()
  }


  getProducts() {
    this.productService.getAllProducts().subscribe(res => {
      this.products = res
   
    })
  }

  addProduct(product: any) {
  
      this.carts = [product, ...this.carts]
      alert(`product ${product.title} a été ajouté au cart`)
      localStorage.setItem('carts',JSON.stringify(this.carts))

  }

  changeStatus() {
    this.status = false;
  }

  retourStatus() {
    this.status = true;
  }


  


 
}
