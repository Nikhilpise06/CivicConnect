
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {

  email = '';
  password = '';
  message = '';

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  loginUser() {

    const loginData = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginData).subscribe({

      next: (response) => {

        localStorage.setItem('token', response.token);

        localStorage.setItem(
          'currentUser',
          JSON.stringify(response)
        );

        if (response.role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/user-dashboard']);
        }

      },

      error: (error) => {

        this.message = 'Invalid Email or Password';
        alert('Invalid email or password');

      }

    });

  }

}
