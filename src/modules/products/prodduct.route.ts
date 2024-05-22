import  express  from 'express';
import { EController } from './product.controller';


const router = express.Router();

router.post('/', EController.createProduct)
router.get('/', EController.getAllProducts)
router.get('/:productId', EController.getSingleProducts)
router.get('/:searchTerm', EController.searchByProductName)
// router.put('/:productId', EController.updateSingleProducts)
router.delete('/:productId', EController.deleteSingleProducts)

export const ERouter = router;