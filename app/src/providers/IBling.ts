export interface IBling {
  client: string
  orderedItemDescription: string
  orderedItemQtde: number
  total: number
}

export interface IBlingProvider {
  sendOrder(order: IBling): Promise<void>
}