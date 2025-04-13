import { Product } from '../../domain/product/Product';
import { IProductRepository } from '../../domain/product/IProductRepository';

export class InMemoryProductRepository implements IProductRepository {
  private products: Product[] = [];

  async getAll(): Promise<Product[]> {
    return this.products;
  }

  async getById(id: string): Promise<Product | null> {
    return this.products.find(p => p.id === id) || null;
  }

  async create(product: Product): Promise<void> {
    this.products.push(product);
  }

  async update(product: Product): Promise<void> {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
  }

  async delete(id: string): Promise<void> {
    this.products = this.products.filter(p => p.id !== id);
  }
}
