export interface IBling {
  client: string
  orderedItemDescription: string
  orderedItemQtde: number
}

export interface IBlingProvider {
  sendOrder(order: IBling): Promise<void>
}