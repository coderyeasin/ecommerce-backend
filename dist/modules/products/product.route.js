"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/", product_controller_1.EController.createProduct);
router.get("/", product_controller_1.EController.getAllProducts);
router.get("/:productId", product_controller_1.EController.getSingleProducts);
router.put("/:productId", product_controller_1.EController.updateSingleProducts);
router.delete("/:productId", product_controller_1.EController.deleteSingleProducts);
exports.EProductRouter = router;
