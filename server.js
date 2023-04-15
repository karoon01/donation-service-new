import app from './src/app'
import { Logger } from './src/Config/logger'

const port = process.env.PORT || 3000

const start = () => {
  try {
    app.listen(port, () => {
      Logger.info(`Server has been started at port: ${port}`)
    })
  } catch (err) {
    Logger.error(`Error occurred: ${err.message}`)
    process.exit(1)
  }
}

start()
