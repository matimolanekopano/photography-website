import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;
  
      const templateParams = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
      };
  
      emailjs
        .send('service_a83uugh', 'template_xxon0gj', templateParams, 'HYtbzAir7gKEW_hkq')
        .then(
          () => alert('Your message has been sent successfully!'),
          (error) => {
            console.error('Email send failed:', error);
            alert('Failed to send your message. Please try again.');
          }
        );
    } else {
      alert('Please fill in all required fields.');
    }
  }
  
}
