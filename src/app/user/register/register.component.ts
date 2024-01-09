import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudUserService } from 'src/app/shared/register.service';
import { Iuser } from 'src/app/shared/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  registrationForm: FormGroup;
  formationId: string;
  formation: string[] = []; 

  constructor(private fb: FormBuilder,private crudUserService: CrudUserService,private router: Router,private route: ActivatedRoute ){
    this.createForm();
    this.formationId = this.route.snapshot.paramMap.get('id');
  }

  createForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      username: ['', [Validators.required]]
    }, {
      validators: this.passwordsMatchValidator 
    });
  }

  private passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password').value;
    const confirmPassword = formGroup.get('confirmPassword').value;

    return password === confirmPassword ? null : { passwordsNotMatch: true };
  }

  register(): void {
    if (this.registrationForm.valid) {
      const { confirmPassword, ...userWithoutConfirmPassword } = this.registrationForm.value;
      this.formation.push(this.formationId);
      const user: Iuser = { ...userWithoutConfirmPassword, role: 'user', formation: this.formation };
      
      this.crudUserService.addClient(user).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error registering user:', error);
        }
      );
    }
  }
}
