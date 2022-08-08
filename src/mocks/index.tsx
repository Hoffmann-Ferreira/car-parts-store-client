import * as Type from "../types";
import amortecedor4 from "../assets/images/amortecedor4.jpg";
import amortecedor1 from "../assets/images/amortecedor1.png";
import amortecedor2 from "../assets/images/amortecedor2.png";
import amortecedor3 from "../assets/images/amortecedor3.png";
import coldair from "../assets/images/cold-air-intake.jpg";
import correiaDentada1 from "../assets/images/correia-dentada-1.png";
import correiaDentada3 from "../assets/images/correia-dentada-3.png";
import disco from "../assets/images/disco-freio-2.jpg";
import turbina from "../assets/images/turbina.jpg";
import mangotes from "../assets/images/metal-horse-mangotes.jpg";

export const mockedProducsts: Type.Product[] = [
  {
    id: "c46e671a-e6fa-457d-bf62-7e38a24b85d6",
    name: "Bilstein shock absorber kit",
    description: "Complete shock absorber kit",
    price: 50.45,
    image: amortecedor4,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryId: "8e75e69d-29f2-4371-a0a7-d9962e16f579",
  },
  {
    id: "37031f8e-ecae-4d08-98ef-013e26d7575d",
    name: "Nakata shock absorber",
    description: "Rear shock",
    price: 20.05,
    image: amortecedor1,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryId: "8e75e69d-29f2-4371-a0a7-d9962e16f579",
  },
  {
    id: "dafbc338-de5f-4945-88c9-dea70eebd355",
    name: "Cofap shock absorber",
    description: "Rear shock turbo gás",
    price: 35.05,
    image: amortecedor2,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryId: "8e75e69d-29f2-4371-a0a7-d9962e16f579",
  },
  {
    id: "b7c3b171-9c1f-42c0-9877-a39a7c2b0bd2",
    name: "Bilstein shock absorber gás",
    description: "Rear shock gás",
    price: 25.05,
    image: amortecedor3,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryId: "8e75e69d-29f2-4371-a0a7-d9962e16f579",
  },
  {
    id: "09d78b02-1605-42c9-b741-cd6c44ee3cf2",
    name: "Cold air intake",
    description: "Used to improve air intake",
    price: 100.05,
    image: coldair,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryId: "2a8094b3-4f25-4323-8c39-1d16ca38f6d2",
  },
  {
    id: "1d41c154-ed26-4121-b4de-e3e9e6f42c98",
    name: " ContinentalToothed belt",
    description: "Used to make the motor rotate asynchronously",
    price: 75.05,
    image: correiaDentada1,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryId: "2a8094b3-4f25-4323-8c39-1d16ca38f6d2",
  },
  {
    id: "b4a8e456-bfda-4e8c-9565-b16d57179ed7",
    name: "Ranalle Toothed belt",
    description: "Used to make the motor rotate asynchronously",
    price: 65.05,
    image: correiaDentada3,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryId: "2a8094b3-4f25-4323-8c39-1d16ca38f6d2",
  },
  {
    id: "bddbe729-7793-4b1d-9eb1-d0fa2a55103c",
    name: "Brembo brake disc",
    description: "Used to stop the vehicle",
    price: 200.05,
    image: disco,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryId: "acf5ba27-5892-4286-80bc-5d891d18152f",
  },
  {
    id: "cd373d53-7e90-44c1-8045-50d716cb8409",
    name: "Garrett turbine",
    description: "Used to improve power",
    price: 500.05,
    image: turbina,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryId: "2a8094b3-4f25-4323-8c39-1d16ca38f6d2",
  },
  {
    id: "b77d4026-d8cb-4b5a-b559-a0ed656ed6be",
    name: "Metal Horse mangotes",
    description: "Used to improve power",
    price: 100.05,
    image: mangotes,
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryId: "2a8094b3-4f25-4323-8c39-1d16ca38f6d2",
  },
];

export const mockedCategories: Type.Category[] = [
  {
    id: "2a8094b3-4f25-4323-8c39-1d16ca38f6d2",
    name: "Engine",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8e75e69d-29f2-4371-a0a7-d9962e16f579",
    name: "Suspension",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "acf5ba27-5892-4286-80bc-5d891d18152f",
    name: "Break",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

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
