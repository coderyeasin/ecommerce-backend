import { Request, Response } from "express";
import { EOrdersServices } from "./order.service";
import ordersSchema from "./order.validation";


const createOrder = async (req: Request, res: Response) => {
    try {
        const { orders:orderData } = req.body;
        const validation = await ordersSchema.parse(orderData)
        const result = await EOrdersServices.createOrderIntoDB(validation)
          res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

export const EOrderController = {
    createOrder
}