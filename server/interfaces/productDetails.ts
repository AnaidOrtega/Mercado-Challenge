import { Price, Shipping } from './products'

export interface ProductDetails {
  id: string
  title: string
  price: number
  condition: string
  shipping: Shipping
  currency_id: string
  pictures: Picture[]
  category_id: string
  sold_quantity: number
}

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

export interface ProductDescription {
  plain_text: string
}
