import { API } from './base'

export const getProducts = async (query: string) => {
  try {
    const products = await API.get(`sites/MLA//search?q=${query}`)
    return products.data
  } catch (error) {}
}

export const getProductCurrency = async (query: string) => {
  try {
    const currency = await API.get(`currencies/${query}`)
    return currency.data
  } catch (error) {}
}

export const getProductDetails = async (itemId: string) => {
  try {
    const product = await API.get(`items/${itemId}`)
    return product.data
  } catch (error) {}
}

export const getProductDescription = async (itemId: string) => {
  try {
    const description = await API.get(`items/${itemId}/description`)
    return description.data
  } catch (error) {}
}
