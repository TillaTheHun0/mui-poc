
// * A Now Serverless Function

import { apolloServer, server } from '../lib'

apolloServer.applyMiddleware({ app: server })

export default server

export const config = {
  api: {
    bodyParser: false
  }
}
