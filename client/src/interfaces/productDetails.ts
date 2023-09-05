import { Price } from './products'

export interface Picture {
  id: string
  url: string
  size: string
  quality: string
  max_size: string
  secure_url: string
}

export interface ViewProductDetails {
  item: {
    id: string
    price: Price
    title: string
    picture: Picture
    condition: string
    description: string
    sold_quantity: number
    free_shipping: boolean
    categories: string[]
  }
}
