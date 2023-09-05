import React from 'react'
import styles from './header.module.scss'
import { Meli, Meli2x } from '../../../assets'
import { SearchBar } from '../../molecules'
import { useWindowSize } from '../../../hooks/useWindowSize'

export const Header = () => {
  const { width } = useWindowSize()
  const isMobile = width <= 576
  return (
    <div className={styles.header}>
      <img src={isMobile ? Meli : Meli2x} />
      <SearchBar placeholder="Nunca dejes de buscar" />
    </div>
  )
}
