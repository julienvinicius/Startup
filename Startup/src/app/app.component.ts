import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  exibirNav: boolean = true;

  realizarLogin() {
    this.exibirNav = false;
  }

  realizarLogout() {
    this.exibirNav = true;
  }
}
