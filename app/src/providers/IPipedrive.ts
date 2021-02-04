export interface IPipedrive {
  user_id: number
  filter_id: number
  status: string
  api_token: string
}

export interface IPipedriveProvider {
  getDeals(deals: IPipedrive): Promise<void>
}