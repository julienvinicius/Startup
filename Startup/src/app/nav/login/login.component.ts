import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  submitForm() {
    if (this.email === 'usuario@example.com' && this.password === '123456') {
      alert("login realizado")
    } else {
      alert('Login inválido. Verifique suas credenciais.');
    }
  }
}
