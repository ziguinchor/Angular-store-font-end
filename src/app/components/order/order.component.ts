import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

 @Input() user: any ;


  constructor(private router:Router) {}

  ngOnInit(): void {
    
  }

  retour() {
     this.router.navigate(['/'])
  }

}
