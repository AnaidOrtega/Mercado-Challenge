import React from 'react'
import { RouterProvider } from 'react-router-dom'
import './styles/global.scss'
import { router } from './router'

export const App = () => {
  return <RouterProvider router={router} />
}
