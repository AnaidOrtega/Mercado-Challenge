import { API } from './base'

export const getProducts = async (query: string) => {
  try {
    const products = await API.get(`/getProducts?q=${query}`)
    return products.data
  } catch (error) {
    console.log(error)
  }
}

export const getProductDetail = async (productId: string) => {
  try {
    const detail = await API.get(`/getProductDetail/${productId}`)
    return detail.data
  } catch (error) {
    console.log(error)
  }
}
