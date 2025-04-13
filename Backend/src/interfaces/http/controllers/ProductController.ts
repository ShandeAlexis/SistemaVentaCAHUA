import { Request, Response } from 'express';
import { ProductService } from '../../../application/product/ProductService';

export class ProductController {
  constructor(private service: ProductService) {}

  list = async (_req: Request, res: Response) => {
    const result = await this.service.list();
    res.json(result);
  };

  get = async (req: Request, res: Response) => {
    const result = await this.service.get(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).send('Not found');
    }
  };

  create = async (req: Request, res: Response) => {
    const result = await this.service.create(req.body);
    res.status(201).json(result);
  };

  update = async (req: Request, res: Response) => {
    const result = await this.service.update(req.params.id, req.body);
    res.json(result);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.delete(req.params.id);
    res.status(204).send();
  };
}
