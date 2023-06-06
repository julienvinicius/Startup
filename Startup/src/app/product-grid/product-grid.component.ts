import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent {
  @Input() exibirLogin: boolean = false;

  products: any[] = [
    {
      imageUrl: 'path/to/product1.jpg',
      title: 'Product 1',
      price: '$100',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      imageUrl: 'path/to/product2.jpg',
      title: 'Product 2',
      price: '$200',
      description: 'Praesent vitae enim a elit varius pretium eu at dolor.'
    },
    // Adicione mais produtos conforme necessário
  ];
}
