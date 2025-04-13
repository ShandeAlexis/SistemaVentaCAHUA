import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';
import { InMemoryProductRepository } from '../../../infrastructure/repositories/InMemoryProductRepository';
import { ProductService } from '../../../application/product/ProductService';

const router = Router();

const repository = new InMemoryProductRepository();
const service = new ProductService(repository);
const controller = new ProductController(service);

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
