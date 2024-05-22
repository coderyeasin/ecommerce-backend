import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

// Products
const createProductsIntoDB = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
}

const getAllProductsFromDB = async () => {
    const result = await ProductModel.find();
    return result;
}
const getAllSearchProductsFromDB = async (searchTerm:string) => {
      const result = await ProductModel.find({
            name: { $regex: searchTerm, $options: 'i' },
        });
    return result;
}

const getSingleProductsFromDB = async (id:string) => {
    const result = await ProductModel.findOne({_id: id});
    return result;
}

const updateSingleProductsFromDB = async (id:string) => {
    const result = await ProductModel.updateOne({_id: id});
    return result;
}


const deleteSingleProductsFromDB = async (id:string) => {
    const result = await ProductModel.deleteOne({_id: id});
    return result;
}

export const EServices = {
    createProductsIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    updateSingleProductsFromDB,
    deleteSingleProductsFromDB,
    getAllSearchProductsFromDB
}
