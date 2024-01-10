import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';
import { Iuser } from 'src/app/shared/iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  formationId: string;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {
    this.formationId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.loginService.login(email, password).subscribe(
        (response) => {
          console.log(response);
          if(response.user.role=='user'){
            this.router.navigate(['/Candidat',response.user.id])
          }
        },
        (error) => {
          console.error('Error during login:', error);
          // Set an error message to display to the user
          this.errorMessage = 'Invalid email or password';
        }
      );
    }
  }
}
