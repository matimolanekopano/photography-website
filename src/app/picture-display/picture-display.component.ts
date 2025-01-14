import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-picture-display',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './picture-display.component.html',
  styleUrl: './picture-display.component.css'
})
export class PictureDisplayComponent {

  constructor(private router: Router) { }

}
