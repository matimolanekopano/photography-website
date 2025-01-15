import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-birthdays',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './birthdays.component.html',
  styleUrl: './birthdays.component.css'
})
export class BirthdaysComponent {

  constructor(private router: Router) { }

}
