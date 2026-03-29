import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginobj : any = {
    email: '',
    contactNo: ''
  };

  http = inject(HttpClient);
  router = inject(Router);

  loginError: string = '';

  onLogin(){
    this.http.post('https://localhost:7285/api/EmployeeMaster/Login', this.loginobj).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.loginError = '';
        this.router.navigate(['/dashboard']); // Navigate to dashboard
      },
      (error) => {
        console.error('Login failed:', error);
        this.loginError = 'Login failed. Please check your credentials.';
      }
    );
  }
}

