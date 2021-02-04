import { CreateOrderUseCase } from "./CreateOrderUseCase";

test('it should be ok', () => {
  let createOrderUseCase: CreateOrderUseCase

  createOrderUseCase.execute({
    clientName: "dev waves test", 
    date: "03/02/2021", 
    total: 100, 
    orderedItemDescription: "computador" , 
    orderedItemQtde: 10
  }).then(() => {
    expect(201)
  })
});
