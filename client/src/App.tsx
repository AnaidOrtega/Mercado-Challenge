import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './styles/global.scss'
import { router } from './router'
import metaImage from './assets/svg/MELI.svg'
import { HelmetProvider } from 'react-helmet-async'

export const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta property="og:title" content="Mercado Libre" />
        <meta property="og:description" content="Mercado Libre Practical Challenge" />
        {/*<meta property="og:image" content={URL of the image you want to use} />*/}
        <meta property="og:url" content={metaImage} />
        <meta property="og:type" content="website" />
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
