import { Component } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    rating: 0,
    numberOfRatings: 0
  };

  constructor(private productService: ProductService) { }

  addProduct() {
    if (this.newProduct.name && this.newProduct.description) {
      this.newProduct.id = Date.now();  // Use timestamp as a unique ID
      this.productService.addProduct(this.newProduct);
      this.newProduct = { id: 0, name: '', description: '', rating: 0, numberOfRatings: 0 };
    }
  }
}
