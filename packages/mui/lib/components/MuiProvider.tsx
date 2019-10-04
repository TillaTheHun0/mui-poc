
import React from 'react'

import { MuiCoreProvider as Provider, IMuiClient, IMuiProviderOptions } from '../core/Mui'

import { getMuiContext } from './MuiContext'

export interface IMuiProviderProps<MuiOperation> {
  client: IMuiClient<MuiOperation>,
  options: IMuiProviderOptions,
  children: React.ReactNode | React.ReactNode[] | null
}

export const MuiProvider: React.FC<IMuiProviderProps<any>> = ({ client, options, children }) => {
  const provider = new Provider({ client, options })
  const MuiContext = getMuiContext()

  return (
    <MuiContext.Consumer>
      {
        (context = {}) => {
          if (provider && context.provider !== provider) {
            context = { ...context, provider }
          }

          // TODO: Tyler. How to set isAuthoring here on provider and context?

          return (
            <MuiContext.Provider value={context}>
              {children}
            </MuiContext.Provider>
          )
        }
      }
    </MuiContext.Consumer>
  )
}
