import express, { Application, Request, Response } from "express";
import cors from "cors";
import { EProductRouter } from "./modules/products/product.route";
import { EOrderRouter } from "./modules/orders/order.route";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use("/api/products", EProductRouter);
app.use("/api/orders", EOrderRouter);

// just a welcome msg to show
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'E-Commerce API Service'
    })
});

// Error handle for unused route
app.all('*', (req: Request, res: Response) => {
      res.status(200).json({
        success: false,
        message: "Route not found"
    })
})

export default app;
