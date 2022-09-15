import './common/env'
import app from './app'
import * as os from 'os'

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(
      `up and running in ${'development'
      } @: ${os.hostname()} on port ${PORT}`
    )
  })
