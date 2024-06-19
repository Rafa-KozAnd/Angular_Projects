import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  newRating: { [key: number]: number } = {};

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getProducts();
  }

  rateProduct(product: Product, rating: number) {
    if (rating > 0 && rating <= 5) {
      product.rating = ((product.rating * product.numberOfRatings) + rating) / (product.numberOfRatings + 1);
      product.numberOfRatings += 1;
      this.productService.updateProduct(product);
      this.loadProducts();
    }
  }
}
