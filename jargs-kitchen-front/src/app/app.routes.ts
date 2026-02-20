import { Routes } from '@angular/router';

export const routes: Routes = [
  // Main pages (header/footer)
  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/pages/landing-page/landing-page.component').then(
            (m) => m.LandingPageComponent,
          ),
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./components/pages/menu/menu.component').then(
            (m) => m.MenuComponent,
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./components/pages/about/about.component').then(
            (m) => m.AboutComponent,
          ),
      },
      {
        path: 'faqs',
        loadComponent: () =>
          import('./components/pages/faqs-page/faqs-page.component').then(
            (m) => m.FaqsPageComponent,
          ),
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./components/pages/blog-page/blog-page.component').then(
            (m) => m.BlogPageComponent,
          ),
      },
      {
        path: 'blog/:slug',
        loadComponent: () =>
          import('./components/pages/blog-article/blog-article.component').then(
            (m) => m.BlogArticlePageComponent,
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./components/pages/contact/contact.component').then(
            (m) => m.ContactComponent,
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./components/pages/cart-page/cart-page.component').then(
            (m) => m.CartPageComponent,
          ),
      },
    ],
  },

  // Auth pages (login/signup with full-screen layout)
  {
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then(
        (m) => m.AuthLayoutComponent,
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/pages/auth/login/login.component').then(
            (m) => m.LoginComponent,
          ),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./components/pages/auth/register/register.component').then(
            (m) => m.RegisterComponent,
          ),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }, // default /auth redirects to login
    ],
  },

  // Wildcard route
  { path: '**', redirectTo: '' },
];
