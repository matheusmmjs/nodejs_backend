import { v4 as uuidv4 } from "uuid";

export class Order {
  public readonly id: string
  public clientName: string
  public total: number
  public date: string
  public orderedItemDescription: string
  public orderedItemQtde: number

  constructor(props: Omit<Order, "id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuidv4()
    }
  }
}
