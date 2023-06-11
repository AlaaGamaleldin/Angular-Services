import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor (private router: Router){
  
  }
  goToProducts(): void{
    this.router.navigate(['/products']);
}
goToMine(): void{
  this.router.navigate(['/']);
}
}

