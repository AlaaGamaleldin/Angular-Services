import { Component, Input } from '@angular/core';
import { product } from 'src/app/domains/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input()
  product: product | undefined;
  constructor (private router: Router){
  
  }
  viewProduct(product: product | undefined): void{
    this.router.navigate(['/products/' + product?.id]);
  }

}
