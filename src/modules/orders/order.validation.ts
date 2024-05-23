import { z } from "zod";

const ordersSchema = z.object({
  email: z.string().email().min(1),
  productId: z.string().min(1),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

export default ordersSchema;
