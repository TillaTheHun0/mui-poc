
// * A Now Serverless Function

import { server } from '../lib'

// * API routing funneled through here
server.use('/api', (_req, res) => res.json({ data: 'sweet api' }))

export default server
