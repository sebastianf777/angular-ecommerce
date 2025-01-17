import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// Importa los módulos necesarios de Angular Material y Router
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
 
  imports: [
    CommonModule,        // Necesario para *ngFor y el pipe currency
    HomeRoutingModule,   // Rutas del módulo Home
    MatCardModule,       // Para usar <mat-card>
    MatButtonModule,     // Para usar <button mat-button>
    RouterModule,        // Para [routerLink]
    HomeComponent, 
  ],
})
export class HomeModule {}


