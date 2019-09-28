
import React from 'react'

import { MuiCoreProvider } from '../core/Mui'

export interface IMuiContext<MuiOperation> {
  provider?: MuiCoreProvider<MuiOperation, any>
  // ? some other Mui stuff that needs to be in the context
}

let muiContext: React.Context<IMuiContext<any>>

export function getMuiContext () {
  if (!muiContext) {
    muiContext = React.createContext({})
  }

  return muiContext
}
