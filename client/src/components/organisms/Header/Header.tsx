import React from 'react'
import styles from './header.module.scss'
import { MercadoLibre } from '../../../assets'
import { SearchBar } from '../../molecules'

export const Header = () => {
  return (
    <div className={styles.header}>
      <MercadoLibre width={50} height={50} />
      <SearchBar placeholder="Nunca dejes de buscar" />
    </div>
  )
}
