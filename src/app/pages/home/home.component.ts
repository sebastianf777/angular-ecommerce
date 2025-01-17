import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    RouterModule, // Para [routerLink]
    MatCardModule, // Para <mat-card>
    MatButtonModule, // Para <button mat-button>
  ],
})
export class HomeComponent implements OnInit {
  products: Product[] = []; // Array para los productos

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('Productos obtenidos:', data); // Verifica si llegan los datos
        this.products = data; // Asigna los productos al array
      },
      (error) => {
        console.error('Error al obtener productos:', error); // Manejo de errores
      }
    );
  }
}
