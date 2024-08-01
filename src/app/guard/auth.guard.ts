import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Access the Router via Dependency Injection
  const router = inject(Router);

  // Check if the user has already logged in
  const loggedIn = localStorage.getItem('loggedIn') === 'true';

  if (loggedIn) {
    // If the user has logged in, redirect to the main route
    router.navigate(['/main']);
    return false;
  }
  
  // Allow access to the login route
  return true;
};
