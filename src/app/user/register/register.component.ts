// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudUserService } from 'src/app/shared/crud-user.service';
import { Iuser } from 'src/app/shared/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private crudUserService: CrudUserService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required]]
    });
  }

  register(): void {
    if (this.registrationForm.valid) {
      const user: Iuser = { ...this.registrationForm.value, role: 'user' };
      this.crudUserService.register(user).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          // Redirect to the login page after successful registration
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error registering user:', error);
          // Handle error response, e.g., display a user-friendly message
        }
      );
    } else {
      // Handle form validation errors
    }
  }
}
