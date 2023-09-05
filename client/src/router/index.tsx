import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ProductDetails, ProductList, RootLayout } from '../components'
import { getProductDetail, getProducts } from '../api/products'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'items',
        element: <ProductList />,
        loader: async function loader({ request }) {
          const query = new URL(request.url).searchParams.get('q')
          const data = await getProducts(query ?? '')
          return {
            data,
          }
        },
      },
      {
        path: 'items/:itemId',
        element: <ProductDetails />,
        loader: async ({ params }) => {
          const data = await getProductDetail(params.itemId ?? '')
          return {
            data,
          }
        },
      },
    ],
  },
])
