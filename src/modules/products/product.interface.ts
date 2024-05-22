export type Variant = {
    type: string;
    value: string;
};

export type Variants = Variant[];

export type Inventory = {
    quantity: number;
    inStock: boolean;
}


export type Product = {
    name: string;
    description: string;
    category: string;
    price: number;
    tags: string[];
    variants: Variants;
    inventory: Inventory
}