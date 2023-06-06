import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() exibirNav: boolean = true;
  @Output() realizarLogin = new EventEmitter<void>();
  @Output() realizarLogout = new EventEmitter<void>();

  logoPath: string = '../assets/Designer.png';
  filtro: string = '';
  usuarioLogado: boolean = false;
  exibirLogin: boolean = false;

  constructor() {}

  cadastrarProduto() {
    // Lógica para cadastrar um novo produto
  }

  onRealizarLogin() {
    this.realizarLogin.emit();
  }

  onRealizarLogout() {
    this.realizarLogout.emit();
  }
}
