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
exports.EController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: productData } = req.body;
        const validationData = yield product_validation_1.default.parse(productData);
        const result = yield product_service_1.EServices.createProductsIntoDB(validationData);
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        if (searchTerm) {
            const result = yield product_service_1.EServices.getAllSearchProductsFromDB(searchTerm);
            res.status(200).json({
                success: true,
                message: `Products matching search term ${searchTerm} fetched successfully!`,
                data: result,
            });
        }
        else {
            const result = yield product_service_1.EServices.getAllProductsFromDB();
            res.status(200).json({
                success: true,
                message: "Products fetched successfully",
                data: result,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.EServices.getSingleProductsFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateSingleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body.products;
        const validationData = yield product_validation_1.default.parse(updateData);
        const result = yield product_service_1.EServices.updateSingleProductsFromDB(productId, validationData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteSingleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield product_service_1.EServices.deleteSingleProductsFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.EController = {
    createProduct,
    getAllProducts,
    getSingleProducts,
    updateSingleProducts,
    deleteSingleProducts,
};
