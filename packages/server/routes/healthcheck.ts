
// * A Now Serverless Function

import { server } from '../lib'

server.get('/healthcheck', (_req, res) => {
  res.json({ status: 'OK' })
})

export default server
