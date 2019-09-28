
import request from 'supertest'

import { server } from './express'

describe('express', () => {
  it('should respond', async () => {
    server.get('/foo', (_req, res) => res.sendStatus(200))

    await request(server).get('/foo')
      .expect(200)
  })
})
