import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-md',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './md.component.html',
  styleUrl: './md.component.css'
})
export class MdComponent {
  constructor(private router: Router) { }
}
