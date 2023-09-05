export interface Product {
  author: {
    name: string
    lastname: string
  }
  item: {
    id: string
    title: string
    price: {
      currency: string
      amount: number
      decimals: number
    }
    picture: string
    condition: string
    free_shipping: boolean
    sold_quantity: number
    description: string
  }
}

export interface ProductList {
  author: {
    name: string
    lastname: string
  }
  categories: string[]
  items: [
    {
      id: string
      title: string
      price: {
        currency: string
        amount: number
        decimals: number
      }
      picture: string
      condition: string
      free_shipping: boolean
    },
  ]
}
