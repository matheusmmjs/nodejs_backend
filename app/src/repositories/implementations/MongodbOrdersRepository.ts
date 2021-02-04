import mongoose from 'mongoose'
import { Order } from "./../../entities/Order";
import { IOrdersRepository } from "./../IOrdersRepository";
import OrderModel from './schemas/Order'

export class MongodbOrdersRepository implements IOrdersRepository {  
  constructor() {
    mongoose.connect('mongodb+srv://admin:admin@cluster0.udadi.mongodb.net/db?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
  
  async save(order: Order): Promise<void> {    
    const createOrders = await OrderModel.create(order)
    console.log(createOrders)
  }
}