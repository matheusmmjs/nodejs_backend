import { IPipedrive, IPipedriveProvider } from "../IPipedrive";
import axios, { AxiosResponse } from 'axios'

export class PipedriveProvider implements IPipedriveProvider {      
  async getDeals(deals: IPipedrive): Promise<void> {
  
    await axios.get(`https://api.pipedrive.com/v1/deals?user_id=${ deals.user_id }&filter_id=${ deals.filter_id }&status=${ deals.status }&start=0&api_token=${ deals.api_token }`)
      .then((response: AxiosResponse) => {
        console.log(response.data.data[1])        
      })
  }
}