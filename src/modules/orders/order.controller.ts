import { Request, Response } from "express";
import { EOrdersServices } from "./order.service";
import ordersSchema from "./order.validation";
import { ProductModel } from "../products/product.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const productsData = await ProductModel.findById(orderData.productId);
    if (!productsData) {
       res.status(404).json({
        success: false,
        message: "Product ID is not matched",
       })
      return;
    }
    if (
      orderData.quantity > productsData.inventory.quantity ||
      !productsData.inventory.inStock
    ) {
      res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
      return;
    }
    productsData.inventory.quantity -= orderData.quantity;
    productsData.inventory.inStock = productsData.inventory.quantity > 0;
    await productsData.save();

    const orderValidationData = await ordersSchema.parse(orderData);
    const result = await EOrdersServices.createOrderIntoDB(orderValidationData);
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
