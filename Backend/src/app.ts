import './common/env'
import routes from './common//routes'
import Connection from './db'
import cors from 'cors'
import helmet from 'helmet'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

Connection

//middleware
app.use(cors())
app.use(helmet())

app.disable('x-powered-by')
app.use(
  express.urlencoded({
    extended: true,
    limit: process.env.REQUEST_LIMIT || '100kb'
  })
)
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ 'health-check': 'OK: top level api working'})
})

app.use('/v1/', routes)

export default app
