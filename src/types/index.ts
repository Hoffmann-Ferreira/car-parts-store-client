export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  categoryId: string;
};

export interface Category {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface Favorite {
  id?: string;
  creatAt?: Date;
  userId: string;
  productName: string;
};

export interface Order {
  id?: string;
  createdAt?: Date;
  userId: string;
};

export interface OrderToProduct {
  id?: string;
  productId: string;
  orderId: string;
  quantity: number;
  createdAt?: Date;
};
