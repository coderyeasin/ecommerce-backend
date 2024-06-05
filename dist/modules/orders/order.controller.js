"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EOrderController = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
const product_model_1 = require("../products/product.model");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const productsData = yield product_model_1.ProductModel.findById(orderData.productId);
        if (!productsData) {
            res.status(404).json({
                success: false,
                message: "Product ID is not matched",
            });
            return;
        }
        if (orderData.quantity > productsData.inventory.quantity ||
            !productsData.inventory.inStock) {
            res.status(400).json({
                success: false,
                message: "Insufficient quantity available in inventory",
            });
            return;
        }
        productsData.inventory.quantity -= orderData.quantity;
        productsData.inventory.inStock = productsData.inventory.quantity > 0;
        yield productsData.save();
        const orderValidationData = yield order_validation_1.default.parse(orderData);
        const result = yield order_service_1.EOrdersServices.createOrderIntoDB(orderValidationData);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        if (email) {
            const result = yield order_service_1.EOrdersServices.getOrderByEmailFromDB(email);
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
        }
        else {
            const result = yield order_service_1.EOrdersServices.getAllOrderFromDB();
            return res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.EOrderController = {
    createOrder,
    getAllOrder,
};
