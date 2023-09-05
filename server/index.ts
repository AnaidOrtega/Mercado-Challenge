import express, { NextFunction, Request, Response } from 'express'
import { productsRouter } from './routes/productsRouter'

const app = express()
const PORT = 3001

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', true.toString())
  next()
})

app.use(productsRouter)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Mercado Libre Challenge')
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
