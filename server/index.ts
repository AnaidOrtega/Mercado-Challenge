import express, { NextFunction, Request, Response } from 'express'
import {
  getProducts,
  getProductDetails,
  getProductCurrency,
  getProductDescription,
} from './api/products'
import { CurrencyData, ProductsQuery, ViewProductList } from './models/products'
import {
  ProductDetails,
  ProductDescription,
  ViewProductDetails,
} from './models/productDetails'

const app = express()

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', true.toString())
  next()
})

app.get(
  '/getProducts',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = `${req.query.q}&limit=4`
      const products: ProductsQuery = await getProducts(query as string)

      const formattedProducts = {
        author: products.author,
        categories: products.filters.map((f) => f.name),
        items: await Promise.all(
          products.results.map(async ({ id, title, ...r }) => {
            const { decimal_places }: CurrencyData = await getProductCurrency(
              r.currency_id,
            )
            return {
              id: id,
              title: title,
              picture: r.thumbnail,
              condition: r.condition,
              address: r.address.state_name,
              free_shipping: r.shipping.free_shipping,
              price: {
                amount: r.price,
                decimals: decimal_places,
                currency: r.currency_id,
              },
            }
          }),
        ),
      } as ViewProductList

      res.status(200).send(formattedProducts)
    } catch (error) {
      next(error)
    }
  },
)

app.get(
  '/getProductDetail/:productId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = req.params.productId
      const {
        id,
        title,
        price,
        currency_id,
        pictures,
        sold_quantity,
        condition,
        shipping: { free_shipping },
      }: ProductDetails = await getProductDetails(productId)

      const { plain_text }: ProductDescription =
        await getProductDescription(productId)

      const { decimal_places }: CurrencyData =
        await getProductCurrency(currency_id)

      const formattedDetails = {
        item: {
          id,
          title,
          sold_quantity,
          free_shipping,
          condition,
          picture: pictures[0],
          price: {
            amount: price,
            currency: currency_id,
            decimals: decimal_places,
          },
          description: plain_text,
        },
      } as ViewProductDetails
      res.status(200).send(formattedDetails)
    } catch (error) {
      next(error)
    }
  },
)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World')
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
