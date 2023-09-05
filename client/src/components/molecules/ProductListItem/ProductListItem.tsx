import React, { FC } from 'react'
import styles from './productListItem.module.scss'
import { ShippingCartImg } from '../../../assets'
import { ViewSingleProduct } from '../../../interfaces/products'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../../../utils/priceFormatter'

export interface ProductListItemProps {
  item?: ViewSingleProduct
}

export const ProductListItem: FC<ProductListItemProps> = ({ item }) => {
  const product = item
  const price = product?.price

  const navigate = useNavigate()
  const formattedPrice = formatPrice(price)

  const handleClickItem = () => {
    navigate(`/items/${item?.id}`)
  }

  return (
    <button className={styles.productItem} onClick={handleClickItem}>
      <img src={product?.picture} className={styles.productItem__img} alt={product?.title} />
      <div className={styles.productItem__content}>
        <div className={styles.productItem__priceView}>
          <p className={styles.productItem__price}>{formattedPrice}</p>
          {product?.free_shipping && <img src={ShippingCartImg} />}
        </div>
        <p className={styles.productItem__description}>{product?.title}</p>
      </div>
      <div className={styles.productItem__placeView}>
        <p className={styles.productItem__place}>{product?.address}</p>
      </div>
    </button>
  )
}
