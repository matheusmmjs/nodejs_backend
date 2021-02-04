import { BlingProvider } from "../../providers/implementations/BlingProvider";
import { MongodbOrdersRepository } from "../../repositories/implementations/MongodbOrdersRepository";
import { CreateOrderController } from "./CreateOrderController";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

const blingProvider = new BlingProvider()
const mongodbOrdersRepository = new MongodbOrdersRepository()

const createOrderUseCase = new CreateOrderUseCase(
  mongodbOrdersRepository,
  blingProvider
)

const createOrderController = new CreateOrderController(
  createOrderUseCase
)

export { createOrderUseCase, createOrderController }