import { BlingProvider } from "../../providers/implementations/BlingProvider";
import { PipedriveProvider } from "../../providers/implementations/PipedriveProvider";
import { MongodbOrdersRepository } from "../../repositories/implementations/MongodbOrdersRepository";
import { CreateOrderController } from "./CreateOrderController";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

const blingProvider = new BlingProvider()
const mongodbOrdersRepository = new MongodbOrdersRepository()
const pipedriveProvider = new PipedriveProvider()

const createOrderUseCase = new CreateOrderUseCase(
  mongodbOrdersRepository,
  blingProvider,
  pipedriveProvider
)

const createOrderController = new CreateOrderController(
  createOrderUseCase
)

export { createOrderUseCase, createOrderController }