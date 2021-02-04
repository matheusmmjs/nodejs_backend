import { Router } from "express"
import { createOrderController } from "./useCases/CreateOrder";

const router = Router()

router.get("/", (request, response) => {
  return response.status(201).send();
});

router.post("/orders", (request, response) => {
  return createOrderController.handle(request, response)
});

export { router }
