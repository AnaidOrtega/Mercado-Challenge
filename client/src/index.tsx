import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { Helmet } from 'react-helmet-async'
import metaImage from './assets/svg/MELI.svg'
import { HelmetProvider } from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta property="og:title" content="Mercado Libre" />
        <meta property="og:description" content="Mercado Libre Practical Challenge" />
        {/*<meta property="og:image" content={URL of the image you want to use} />*/}
        <meta property="og:url" content={metaImage} />
        <meta property="og:type" content="website" />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
