import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  product: any


  constructor(
               private productService: ProductService,
               private activate: ActivatedRoute,
               private router: Router
              ) {}


  ngOnInit(): void {
     
       this.activate.paramMap.subscribe(param => {
        this.productService.getProductById(param.get('id')).subscribe(res => {
          this.product = res
          console.log(this.product)
        })
       })
  }

  retour() {
     this.router.navigate(['/'])
  }

 



}
