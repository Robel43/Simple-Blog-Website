import './common/env'
import logger from './common/logger'
import app from './app'
import * as os from 'os'

const PORT = process.env.PORT
app.listen(PORT, () => {
    logger.info(
      `up and running in ${'development'
      } @: ${os.hostname()} on port ${PORT}`
    )
  })
