import { Router } from '@angular/router';
import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 @Input() carts: any[] = []
 @Output() change = new EventEmitter()

counter: number = 1;

user = {
  fullname:'',
  adresse:'',
  credit:null
}

total_price: any;
 orders:any[] = [];
 status_payment: boolean = true

  constructor(private router: Router){}


  ngOnInit(): void {
    this.total_price = this.carts.reduce((total,product) => total + product.price ,0)
     
    }
 
 addOrder() {
  this.orders = [this.user,...this.carts]
  
 }

 deleteProductFromCart(id: any) {
   
   this.carts = this.carts.filter((product) => product.id !== id);
   this.total_price = this.carts.reduce((total, product) => total + product.price,0)
   alert(`product removed from cart`)

 }

 changeStatusCart() {
   
    this.change.emit();
 }

 
  

}
