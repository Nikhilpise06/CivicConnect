
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class Register {

  message = '';

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private authService: Auth
  ) {}

  registerUser() {

    this.authService.register(this.user).subscribe({

      next: () => {
        this.message = 'Registration Successful!';
      },

      error: () => {
        this.message = 'Registration Failed!';
      }

    });

  }

}
