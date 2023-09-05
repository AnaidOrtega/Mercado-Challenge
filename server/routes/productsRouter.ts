import express, { NextFunction, Request, Response } from 'express'
import {
  CurrencyData,
  ProductCategories,
  ProductsQuery,
  ViewProductList,
} from '../interfaces/products'
import {
  getProductCategories,
  getProductCurrency,
  getProductDescription,
  getProductDetails,
  getProducts,
} from '../api/products'
import {
  ProductDescription,
  ProductDetails,
  ViewProductDetails,
} from '../interfaces/productDetails'

const router = express.Router()

router.get(
  '/getProducts',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = `${req.query.q}&limit=4`
      const products: ProductsQuery = await getProducts(query as string)

      // Get categories from filer 'Categorias'
      const filter = products?.filters?.filter((p) => p.id === 'category')

      // Set all categories into 1 string array
      const categories = filter[0]?.values
        ?.map((v) => v.path_from_root.map((p) => p.name))
        .flat(1)

      const formattedProducts = {
        author: products.author,
        categories,
        items: await Promise.all(
          products.results.map(async ({ id, title, ...r }) => {
            // Get currency for each item
            const { decimal_places }: CurrencyData = await getProductCurrency(
              r.currency_id,
            )
            // desired format
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

router.get(
  '/getProductDetail/:productId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = req.params.productId
      const {
        id,
        title,
        price,
        pictures,
        condition,
        category_id,
        currency_id,
        sold_quantity,
        shipping: { free_shipping },
      }: ProductDetails = await getProductDetails(productId)

      // additional information for the product
      const { plain_text }: ProductDescription =
        await getProductDescription(productId)

      const { decimal_places }: CurrencyData =
        await getProductCurrency(currency_id)

      const { path_from_root }: ProductCategories =
        await getProductCategories(category_id)

      // desired format
      const formattedDetails = {
        item: {
          id,
          title,
          condition,
          sold_quantity,
          free_shipping,
          categories: path_from_root.map((p) => p.name),
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

export { router as productsRouter }
