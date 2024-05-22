import { Orders } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrderIntoDB = async (order: Orders) => {
    const result = await OrderModel.create(order)
    return result;
}

export const EOrdersServices = {
    createOrderIntoDB
}