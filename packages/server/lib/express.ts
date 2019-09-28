
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

function buildExpress () {
  const server = express()

  server.use(cookieParser())
  server.use(bodyParser.json())

  return server
}

const server = buildExpress()

export { server }
