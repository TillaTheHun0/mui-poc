
if (!process.env.NODE_ENV) {
  throw new Error('You must define a NODE_ENV')
}

const env = process.env.NODE_ENV || 'development'

const allConfig: any = {
  development: {
    jyve: {
      url: process.env.API_URL || 'http://localhost:9000',
      key: process.env.API_KEY
    }
  },
  test: {
    jyve: {
      url: process.env.API_URL || 'https://jyve-api-test.herokuapp.com',
      key: process.env.API_KEY
    }
  },
  qa: {
    jyve: {
      url: process.env.API_URL || 'https://jyve-api-test.herokuapp.com',
      key: process.env.API_KEY
    }
  },
  production: {
    jyve: {
      url: process.env.API_URL || 'https://jyve-api-test.herokuapp.com',
      key: process.env.API_KEY
    }
  }
}

export default {
  env,
  ...allConfig[env]
}
