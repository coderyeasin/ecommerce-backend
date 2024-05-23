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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EServices = void 0;
const product_model_1 = require("./product.model");
// Products
const createProductsIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(product);
    return result;
});
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
const getSingleProductsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOne({ _id: id });
    return result;
});
const updateSingleProductsFromDB = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const filterId = { _id: id };
    const options = { new: true };
    const updateDoc = {
        $set: {
            name: productData.name,
            description: productData.description,
            price: productData.price,
            category: productData.category,
            tags: productData.tags,
            variants: productData.variants,
            inventory: productData.inventory,
        },
    };
    const result = yield product_model_1.ProductModel.findOneAndUpdate(filterId, updateDoc, options);
    return result;
});
const getAllSearchProductsFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find({
        name: { $regex: searchTerm, $options: "i" },
    });
    return result;
});
const deleteSingleProductsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.deleteOne({ _id: id });
    return result;
});
exports.EServices = {
    createProductsIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    updateSingleProductsFromDB,
    deleteSingleProductsFromDB,
    getAllSearchProductsFromDB,
};
