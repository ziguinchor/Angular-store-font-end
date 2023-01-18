import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  implements OnInit{

  user = {
    fullname:'',
    adresse:'',
    credit:''
  }

  status: boolean = true;

  constructor(private router:Router) {}


   ngOnInit(): void {
     
   }
   func() {
    console.log('value of input changed')
   }

   buyProduct() {

    this.status = false
   }

}
