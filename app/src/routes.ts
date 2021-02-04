import { Router } from "express"
import { createOrderController } from "./useCases/CreateOrder";
import OrderModel from './repositories/implementations/schemas/Order'
import mongoose from 'mongoose'

const router = Router()

router.get("/", (request, response) => {
  return response.status(201).send();
});

router.post("/orders", (request, response) => {
  return createOrderController.handle(request, response)
});

router.get("/orders", async (request, response) => {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.udadi.mongodb.net/db?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
  const result = await OrderModel.find()
  return response.status(200).json(result)
});

export { router }