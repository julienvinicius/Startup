import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { LoginComponent } from './nav/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductGridComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
