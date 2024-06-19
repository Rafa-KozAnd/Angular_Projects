import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  numberOfRatings: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private storageKey = 'productManager';

  getProducts(): Product[] {
    const storedProducts = localStorage.getItem(this.storageKey);
    return storedProducts ? JSON.parse(storedProducts) : [];
  }

  addProduct(product: Product) {
    const products = this.getProducts();
    products.push(product);
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  updateProduct(updatedProduct: Product) {
    let products = this.getProducts();
    products = products.map(product => product.id === updatedProduct.id ? updatedProduct : product);
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }
}
