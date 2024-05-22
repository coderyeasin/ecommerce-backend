import  express  from 'express';
import { EOrderController } from './order.controller';




const router = express.Router();

router.post('/', EOrderController.createOrder)


export const EOrderRouter = router;