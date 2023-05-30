import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: any;
  password: any;

  submitForm() {
    // Aqui você pode implementar a lógica para processar o formulário de login
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
  }
}
