import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photography-website';

  showNavbar: boolean = true;

  constructor(private router: Router) {
    // Update navbar visibility based on route
    this.router.events.subscribe(() => {
      this.showNavbar = !this.router.url.includes('home');
    });
  }
}
