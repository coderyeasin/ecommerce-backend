"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const variantSchema = zod_1.z.object({
    type: zod_1.z.string().nonempty({ message: "Variant type is required" }),
    value: zod_1.z.string().nonempty({ message: "Variant value is required" }),
});
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean().optional().default(false),
});
const productSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty({ message: "Product name is required" }),
    description: zod_1.z
        .string()
        .nonempty({ message: "Product description is required" }),
    price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
    category: zod_1.z.string().nonempty({ message: "Product category is required" }),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z
        .array(variantSchema)
        .min(1, { message: "Product must have at least one variant" }),
    inventory: inventorySchema,
});
exports.default = productSchema;
