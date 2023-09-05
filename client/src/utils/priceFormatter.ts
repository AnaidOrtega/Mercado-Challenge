import { Price } from '../models/products'

export const formatPrice = (price?: Price) => {
  if (price) {
    const formattedPrice = price.amount.toLocaleString('es-ar', {
      style: 'currency',
      currency: price.currency,
      minimumFractionDigits: price.decimals,
    })
    return formattedPrice
  }
  return '$0'
}
