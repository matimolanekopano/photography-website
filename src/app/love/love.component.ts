import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-love',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './love.component.html',
  styleUrl: './love.component.css'
})
export class LoveComponent {

  constructor(private router: Router) { }

}
