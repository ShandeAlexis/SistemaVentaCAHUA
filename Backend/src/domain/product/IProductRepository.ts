import { Product } from './Product';

export interface IProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: string): Promise<Product | null>;
  create(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}
