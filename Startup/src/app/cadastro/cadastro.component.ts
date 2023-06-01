import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formData!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.formData = this.formBuilder.group(
      {
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', Validators.required]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  submitForm() {
    if (this.formData.valid) {
      console.log(this.formData.value);
      this.formData.reset();
      this.router.navigate(['/login']); // Redirecionar para a página desejada
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }

  get nome(): AbstractControl | null {
    return this.formData.get('nome');
  }

  get email(): AbstractControl | null {
    return this.formData.get('email');
  }

  get senha(): AbstractControl | null {
    return this.formData.get('senha');
  }

  get confirmarSenha(): AbstractControl | null {
    return this.formData.get('confirmarSenha');
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const senha = control.get('senha');
    const confirmarSenha = control.get('confirmarSenha');

    if (senha && confirmarSenha && senha.value !== confirmarSenha.value) {
      return { passwordMismatch: true };
    }

    return null;
  }
}
