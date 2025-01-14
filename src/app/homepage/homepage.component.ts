import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) {}

  goToGallery() {
    this.router.navigate(['/picture']);
  }

  ngOnInit(): void {
  }
}
