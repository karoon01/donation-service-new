import express from 'express'
import cors from 'cors'
import router from './API'

const app = express()

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))

app.use('/api/v1', router)

export default app
