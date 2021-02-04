import { Order } from "../../entities/Order";
import { IOrdersRepository } from "../IOrdersRepository";

export class MongodbOrdersRepository implements IOrdersRepository {
  private orders: Order[] = []
  
  async save(order: Order): Promise<void> {
    this.orders.push(order)
    console.log(order)
  }
}