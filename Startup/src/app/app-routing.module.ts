import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';

const routes: Routes = [
  // Outras rotas...
  { path: 'cadastro', component: CadastroPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
