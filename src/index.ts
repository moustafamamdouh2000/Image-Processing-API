import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import routes from './routes'
const prt = 5000

const app: Application = express()

app.use(morgan('tiny'))

app.use('/images', routes)

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .send(
      'use /images to check out the api usage example: localhost:{portnumber in this case 5000}/images'
    )
})

app.listen(prt, () => {
  console.log('listening to port = ', prt)
})

export default app
