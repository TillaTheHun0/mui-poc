
import { IMuiClient } from '@mui-poc/mui'

/**
 * * Here is where we have defined
 * * our MuiOperation shape
 *
 * * This would more than likely be specified by subsequent libraries that implement the
 * * MuiClient api and provides the flexibility for having custom operation shapes that
 * * compliment MuiClient implementations
 */
export interface IMuiOperation {
  gqlQuery: any
  variables: {
    [variable: string]: any
  }
}

let someContent = 'some awesome content for rich text with uid'

let counter = 0

/**
 * * Here is our MuiClient implementation
 * * We are simply simulating a request, but we could do really anything to fetch
 * * content here
 */
export const muiClient: IMuiClient<IMuiOperation> = {
  fetch: async (operation) => {
    const { variables } = operation

    // * simulate a request
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // * Simulate an error on every other call
        if (++counter % 2) {
          return reject(new Error('Crap a fetching of content error'))
        }

        resolve({ text: `${someContent} ${variables.uid}` })
      }, 3000)
    })
  },
  store: async (operation) => {
    const { variables } = operation

    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ text: variables })
        someContent = variables.text
      })
    })
  },
  isAuthoringMode: () => Promise.resolve(false)
}
