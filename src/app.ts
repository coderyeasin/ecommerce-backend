import express, { Application } from "express";
import cors from "cors";
import { EProductRouter } from "./modules/products/product.route";
import { EOrderRouter } from "./modules/orders/order.route";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use("/api/products", EProductRouter);
app.use("/api/orders", EOrderRouter);

export default app;
