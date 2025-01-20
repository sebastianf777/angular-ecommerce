import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule], // Agrega CommonModule aquí
  template: `
    <div *ngIf="product">
      <h1>{{ product.name }}</h1>
      <img [src]="product.image" alt="{{ product.name }}" />
      <p>{{ product.description }}</p>
      <p><strong>{{ product.price | currency }}</strong></p>
      <button mat-button color="primary" routerLink="/">Back to Home</button>
    </div>
  `,
  styles: [`
    div { text-align: center; margin: 20px; }
    img { max-width: 300px; border-radius: 8px; }
  `],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(+productId).subscribe(
        (data: Product) => this.product = data,
        (error: any) => console.error('Error fetching product details:', error)
      );
    }
  }
}
