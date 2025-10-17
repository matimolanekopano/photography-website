import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent  {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bookingDate: ['', Validators.required],
      bookingTime: ['', Validators.required],
      photoType: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      const templateParams = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        bookingDate: formValues.bookingDate,
        bookingTime: formValues.bookingTime,
        photoType: formValues.photoType,
      };

      emailjs
        .send('service_a83uugh', 'template_9srcqjv', templateParams, 'HYtbzAir7gKEW_hkq')
        .then(
          () => alert('Your booking has been sent successfully!'),
          (error) => {
            console.error('Email send failed:', error);
            alert('Failed to send your booking. Please try again.');
          }
        );
    } else {
      alert('Please fill in all required fields.');
    }
  }

}

