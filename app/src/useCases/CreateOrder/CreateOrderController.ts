import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

export class CreateOrderController {
  constructor(
    private createOrderUseCase: CreateOrderUseCase
  ) {}

  async handle(request: Request, response: Response) : Promise<Response> {
    const { clientName, date, total, orderedItemDescription, orderedItemQtde } = request.body

    try {
      await this.createOrderUseCase.execute({
        clientName, 
        date, 
        total, 
        orderedItemDescription, 
        orderedItemQtde
      })
      
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
        err: err
      })
    }
  }
}