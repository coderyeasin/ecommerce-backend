import express from "express";
import { EOrderController } from "./order.controller";

const router = express.Router();

router.post("/", EOrderController.createOrder);
router.get("/", EOrderController.getAllOrder);

export const EOrderRouter = router;
