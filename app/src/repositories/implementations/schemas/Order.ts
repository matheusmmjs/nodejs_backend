import { Document, Schema, model } from 'mongoose'

interface OrderInterface extends Document{
  clientName: string
  total?: number
  date?: string
  orderedItemDescription: string
  orderedItemQtde: number
}

const OrderSchema = new Schema({
  clientName: String,
  total: Number,
  date: String,
  orderedItemDescription: String,
  orderedItemQtde: Number
}, {
  timestamps: true
})

export default model<OrderInterface>('OrderModel', OrderSchema)