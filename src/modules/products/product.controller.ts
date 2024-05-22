import { Request, Response } from "express";
import { EServices } from "./product.service";


const createProduct = async (req: Request, res: Response) => {
    try {
        const {product: productData} = req.body;
        const result = await EServices.createProductsIntoDB(productData);

        res.status(200).json({
            success: true,
            message: 'Product created successfully',
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await EServices.getAllProductsFromDB();

        res.status(200).json({
            success: true,
            message: 'Products fetched successfully',
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

const getSingleProducts = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await EServices.getSingleProductsFromDB(productId);

        res.status(200).json({
            success: true,
            message: 'Products fetched successfully',
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

const updateSingleProducts = async (req: Request, res: Response) => {
        try {
        const { productId } = req.params;
        const result = await EServices.updateSingleProductsFromDB(productId);

        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

const searchByProductName = async(req: Request, res: Response) => {
    try {
         const { searchTerm } = req.body;
          const result = await EServices.getAllSearchProductsFromDB(searchTerm as string);
            res.status(200).json({
            success: true,
            message:  `Products matching search term ${searchTerm} fetched successfully!`,
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteSingleProducts = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        await EServices.deleteSingleProductsFromDB(productId);

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: null
        })
    } catch (error) {
        console.log(error)
    }
}


export const EController = {
    createProduct,
    getAllProducts,
    getSingleProducts,
    updateSingleProducts,
    deleteSingleProducts,
    searchByProductName
}