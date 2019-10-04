
import React from 'react'

import { MuiCoreProvider } from '../core/Mui'

export interface IMuiContext<MuiOperation> {
  provider?: MuiCoreProvider<MuiOperation, any>
  isAuthoring?: boolean
  // ? some other useful Mui info on the context
}

let muiContext: React.Context<IMuiContext<any>>

export function getMuiContext () {
  if (!muiContext) {
    muiContext = React.createContext({})
  }

  return muiContext
}
