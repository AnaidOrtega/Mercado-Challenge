import express, { NextFunction, Request, Response } from 'express'
import { productsRouter } from './routes/productsRouter'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())

app.use(productsRouter)

app.all('*', async (req, res) => {
  res.status(404).send('Page not found :(')
})

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Mercado Libre Challenge')
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
