import React, { FC } from 'react'
import styles from './categoriesView.module.scss'

export interface CategoriesProps {
  categories?: string[]
}

export const CategoriesView: FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.categories}>
      {categories?.map((c, index) => (
        <div key={c} className={styles.categories__categorie}>
          <p className={styles.categories__helperText}>{c}</p>
          {index < categories.length - 1 && <p>{'>'}</p>}
        </div>
      ))}
    </div>
  )
}
