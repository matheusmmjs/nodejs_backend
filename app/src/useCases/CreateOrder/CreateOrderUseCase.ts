import { IOrdersRepository } from "./../../repositories/IOrdersRepository";
import { ICreateOrderRequestDTO } from "./CreateOrderDTO";
import { Order } from "./../../entities/Order";
import { IBlingProvider } from "../../providers/IBling";

export class CreateOrderUseCase {
  constructor(
    private ordersRepository: IOrdersRepository,
    private blingProvider: IBlingProvider
  ) {}

  async execute (data: ICreateOrderRequestDTO){
    const order = new Order(data)
    
    await this.ordersRepository.save(order)

    await this.blingProvider.sendOrder({
      client: data.clientName,            
      orderedItemDescription: data.orderedItemDescription,
      orderedItemQtde: data.orderedItemQtde
    })
  }

}