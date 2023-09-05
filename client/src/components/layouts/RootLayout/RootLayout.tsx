import React from 'react'
import { Header } from '../..'
import styles from './rootLayout.module.scss'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.root__content}>
        <Outlet />
      </div>
    </div>
  )
}
