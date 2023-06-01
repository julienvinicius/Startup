// product-list.component.ts

import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Produto 1', price: 10, description: 'Descrição do Produto 1' },
    { name: 'Produto 2', price: 20, description: 'Descrição do Produto 2' },
    { name: 'Produto 3', price: 30, description: 'Descrição do Produto 3' },
    // Adicione mais produtos aqui...
  ];
}