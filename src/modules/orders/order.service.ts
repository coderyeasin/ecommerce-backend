import { Orders } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrderIntoDB = async (order: Orders) => {
    const result = await OrderModel.create(order)
    return result;
}

const getAllOrderFromDB = async () => {
    const result = await OrderModel.find();
    return result
}
const getOrderByEmailFromDB = async (email : string) => {
    const result = await OrderModel.find({ email:email });
    return result
}

export const EOrdersServices = {
    createOrderIntoDB,
    getAllOrderFromDB,
    getOrderByEmailFromDB
}