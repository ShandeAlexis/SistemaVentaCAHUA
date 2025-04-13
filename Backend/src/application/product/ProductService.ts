import { Product } from '../../domain/product/Product';
import { IProductRepository } from '../../domain/product/IProductRepository';
import { randomUUID } from 'crypto';

export class ProductService {
  constructor(private repository: IProductRepository) {}

  async list() {
    return this.repository.getAll();
  }

  async get(id: string) {
    return this.repository.getById(id);
  }

  async create(data: { name: string; price: number; stock: number }) {
    const product = new Product(randomUUID(), data.name, data.price, data.stock);
    await this.repository.create(product);
    return product;
  }

  async update(id: string, data: { name: string; price: number; stock: number }) {
    const product = new Product(id, data.name, data.price, data.stock);
    await this.repository.update(product);
    return product;
  }

  async delete(id: string) {
    await this.repository.delete(id);
  }
}
