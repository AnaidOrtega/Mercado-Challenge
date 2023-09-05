import React from 'react'
import { CategoriesView, ProductListItem } from '../../'
import styles from './productList.module.scss'
import { useLoaderData } from 'react-router-dom'
import { ViewProductList } from '../../../interfaces/products'

export interface ProductListData {
  data: ViewProductList
}

export const ProductList = () => {
  const { data } = useLoaderData() as ProductListData

  return (
    <div className={styles.productList}>
      <CategoriesView categories={data?.categories} />
      <div className={styles.productList__list}>
        {data?.items.map((p) => <ProductListItem item={p} key={p.id} />)}
      </div>
    </div>
  )
}
