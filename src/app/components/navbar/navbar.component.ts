import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule], // Add MatToolbarModule here
  template: `
    <mat-toolbar color="primary">
      <span>E-Commerce Platform</span>
      <span class="spacer"></span>
      <a mat-button routerLink="/">Home</a>
      <a mat-button routerLink="/cart">Cart</a>
    </mat-toolbar>
  `,
  styles: [
    `.spacer { flex: 1 1 auto; }`
  ]
})
export class NavbarComponent {}
