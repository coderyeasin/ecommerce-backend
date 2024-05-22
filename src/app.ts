import express, { Application } from 'express'
import cors from 'cors'
import { ERouter } from './modules/products/prodduct.route'

const app: Application = express()

// parser
app.use(express.json())
app.use(cors())


app.use('/api/products', ERouter)

export default app