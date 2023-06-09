import { Component, Input } from '@angular/core';
import { product } from 'src/app/domains/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input()
  product: product | undefined;
}
