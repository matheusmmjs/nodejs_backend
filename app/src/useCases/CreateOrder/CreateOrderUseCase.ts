import { IOrdersRepository } from "./../../repositories/IOrdersRepository";
import { ICreateOrderRequestDTO } from "./CreateOrderDTO";
import { Order } from "./../../entities/Order";
import { IBlingProvider } from "../../providers/IBling";
import { IPipedriveProvider } from "../../providers/IPipedrive";

export class CreateOrderUseCase {
  constructor(
    private ordersRepository: IOrdersRepository,
    private blingProvider: IBlingProvider,
    private pipedriveProvider: IPipedriveProvider
  ) {}

  async execute (data: ICreateOrderRequestDTO){
    const order = new Order(data)
    const deals = {
      user_id: 12014524,
      filter_id: 23,
      status: "won",
      api_token: "62fd57dbbc076135825ec6e48ac0b5b2a2d440c3"
    }

    await this.pipedriveProvider.getDeals(deals)    

    await this.blingProvider.sendOrder({
      client: data.clientName,            
      orderedItemDescription: data.orderedItemDescription,
      orderedItemQtde: data.orderedItemQtde,
      total: data.total
    })

    await this.ordersRepository.save(order)
  }

}