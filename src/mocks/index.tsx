import * as Type from "../types";

export const mockedUsers: Type.User[] = [
  {
    id: "fa2db8fe-35d1-477e-8b49-b488797b72e7",
    name: "Andrei",
    email: "andrei@blue.com",
    password: "Aei!34215",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedFavorites: Type.Favorite[] = [
  {
    id: "a3be6ec5-8c9b-432e-9a92-31e558205c68",
    creatAt: new Date(),
    userId: "fa2db8fe-35d1-477e-8b49-b488797b72e7",
    productName: "Brembo brake disc",
  },
];

export const mockedOrder: Type.Order[] = [
  {
    id: "30525cb5-2ee5-4842-9d41-b85957c94ba3",
    createdAt: new Date(),
    userId: "a3be6ec5-8c9b-432e-9a92-31e558205c68",
  },
];

export const mockedOrderToProduct: Type.OrderToProduct[] = [
  {
    id: "6f7f6fa4-b7dc-4cb5-a24e-b7fc4c3541e9",
    productId: "cd373d53-7e90-44c1-8045-50d716cb8409",
    orderId: "30525cb5-2ee5-4842-9d41-b85957c94ba3",
    quantity: 2,
    createdAt: new Date(),
  },
  {
    id: "fe7d0bba-0cf0-46a7-b1b7-0ade1d972ac5",
    productId: "bddbe729-7793-4b1d-9eb1-d0fa2a55103c",
    orderId: "30525cb5-2ee5-4842-9d41-b85957c94ba3",
    quantity: 1,
    createdAt: new Date(),
  },
];
