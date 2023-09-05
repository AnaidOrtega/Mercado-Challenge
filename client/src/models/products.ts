export interface Author {
  name: string
  lastname: string
}

export interface Paging {
  total: number
  limit: number
  offset: number
  primary_results: number
}

export interface Shipping {
  free_shipping: boolean
}

export interface Filter {
  name: string
}

export interface Address {
  city_id: string
  state_id: string
  city_name: string
  state_name: string
}

export interface CurrencyData {
  id: string
  symbol: string
  description: string
  decimal_places: number
}

export interface SingleProduct {
  id: string
  price: number
  title: string
  address: Address
  condition: string
  thumbnail: string
  shipping: Shipping
  currency_id: string
}

export interface ProductsQuery {
  query: string
  author: Author
  filters: Filter[]
  results: SingleProduct[]
}

export interface Price {
  amount: number
  decimals: number
  currency: string
}
export interface ViewSingleProduct {
  id: string
  price: Price
  title: string
  picture: string
  address: string
  condition: string
  free_shipping: boolean
}

export interface ViewProductList {
  author: Author
  categories: string[]
  items: ViewSingleProduct[]
}
