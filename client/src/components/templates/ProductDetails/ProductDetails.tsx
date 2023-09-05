import React from 'react'
import styles from './productDetails.module.scss'
import { Button } from '../../atoms'
import { ViewProductDetails } from '../../../models/productDetails'
import { useLoaderData } from 'react-router-dom'
import { formatPrice } from '../../../utils/priceFormatter'

export interface ProductDetailsData {
  data: ViewProductDetails
}
export const ProductDetails = () => {
  const { data } = useLoaderData() as ProductDetailsData
  const product = data?.item

  const formattedPrice = formatPrice(product?.price).split(',')

  return (
    <div className={styles.details}>
      <div className={styles.details__right}>
        <div className={styles.details__imgContainer}>
          <img src={product?.picture.url} className={styles.details__img} />
        </div>
        <div className={styles.details__left}>
          <p className={styles.details__titleDescription}>Descripcion del producto</p>
          <p className={styles.details__description}>{product?.description}</p>
        </div>
      </div>
      <div className={styles.details__info}>
        <p className={styles.details__helperText}>
          {product?.condition.charAt(0).toUpperCase() + product?.condition.slice(1)} -{' '}
          {product?.sold_quantity} vendidos
        </p>
        <p className={styles.details__title}>{product?.title}</p>
        <p className={styles.details__price}>
          {formattedPrice[0]}
          <sub>{formattedPrice[1]}</sub>
        </p>
        <Button color="primary">Comprar</Button>
      </div>
    </div>
  )
}
