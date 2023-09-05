import React from 'react'
import { ProductListItem } from '../../'
import styles from './productList.module.scss'
import { useLoaderData } from 'react-router-dom'
import { ViewProductList } from '../../../models/products'

export interface ProductListData {
  data: ViewProductList
}

export const ProductList = () => {
  const { data } = useLoaderData() as ProductListData

  return (
    <div className={styles.productList}>
      {data?.items.map((p) => <ProductListItem item={p} key={p.id} />)}
    </div>
  )
}
