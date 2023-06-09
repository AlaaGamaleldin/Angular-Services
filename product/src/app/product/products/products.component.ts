import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { product } from 'src/app/domains/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
products: product[]= [];
productsUrl: string = "https://fakestoreapi.com/products";
constructor(private http: HttpClient) {

}
ngOnInit(): void {
  this.http.get<product[]>(this.productsUrl)
    .subscribe((product) => {
      console.log(product);
      this.products = product;
      console.log("Products:: " + this.products.length);
    });
}


}
