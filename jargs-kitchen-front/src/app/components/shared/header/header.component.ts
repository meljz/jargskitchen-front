import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // adjust path if needed
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() toggleCart = new EventEmitter<void>();
  isMobileMenuOpen = false;

  userName: string | null = null;

  constructor(
    public cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // or 'userName'
  }

  ngOnInit() {
    // First try to get user from token payload (faster, no API call needed)
    const userFromToken = this.authService.getUserFromToken();
    if (userFromToken && userFromToken.name) {
      this.userName = userFromToken.name;
      return;
    }

    // If no token or no name in token, try API call if logged in
    if (this.authService.isLoggedIn()) {
      this.authService.getUser().subscribe({
        next: (res) => {
          if (res.user && res.user.name) {
            this.userName = res.user.name;
          }
        },
        error: (err) => {
          // Silently handle error - user might not be authenticated
          console.log('Not authenticated or error fetching user');
          this.userName = null;
        },
      });
    }
  }

  logoutUser() {
    this.authService.logout();
    alert('user logged out');
    this.userName = null;
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  this.router.navigate(['/']);
  }
}
