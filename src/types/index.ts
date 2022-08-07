export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    categoryId: string;
};

export interface Category {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
