import { Request, Response } from "express";
import { EOrdersServices } from "./order.service";
import ordersSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const { orders: orderData } = req.body;
    const validation = await ordersSchema.parse(orderData);
    const result = await EOrdersServices.createOrderIntoDB(validation);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    if (email) {
      const result = await EOrdersServices.getOrderByEmailFromDB(
        email as string,
      );
      if (!result.length) {
        return res.status(404).json({
          success: false,
          message: "Order not found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      const result = await EOrdersServices.getAllOrderFromDB();
      return res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const EOrderController = {
  createOrder,
  getAllOrder,
};
