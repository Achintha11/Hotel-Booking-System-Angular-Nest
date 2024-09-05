import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { LoginResponse, LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputGroupAddonModule,
    InputGroupModule,
    ButtonModule,
    PasswordModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe({
      next: (response: LoginResponse) => {
        console.log('Login successful:', response);
        localStorage.setItem('accessToken', response.accessToken); // Store the token
        this.router.navigate(['']); // Redirect to a protected route
      },
      error: (err) => {
        console.error('Login failed:', err);
        // Show a user-friendly error message
      },
    });
  }
}
