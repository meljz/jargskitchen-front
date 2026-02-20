import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  agreeTerms: boolean = false;

  showPassword: boolean = false;
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  get passwordRequirements() {
    return [
      {
        label: 'At least 8 characters',
        met: this.password.length >= 8,
      },
      {
        label: 'Contains a number',
        met: /\d/.test(this.password),
      },
      {
        label: 'Contains uppercase',
        met: /[A-Z]/.test(this.password),
      },
    ];
  }

  registerUser() {
    this.isLoading = true;

    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    this.authService.register(data).subscribe({
      next: (res) => {
        this.isLoading = false;
        alert('Registration successful!');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.isLoading = false;
        alert('Registration failed!');
        console.error(err);
      },
    });
  }
}
