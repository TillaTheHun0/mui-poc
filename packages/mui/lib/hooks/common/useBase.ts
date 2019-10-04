
import { useRef, useReducer } from 'react'

import { MuiData } from '../../core/MuiData'

export function useBase<MuiOperation> (operation: MuiOperation, providerDo: any) {
  /**
   * * We pass this dispatcher around to force React to re-render
   * * for example when our data finally loads
   */
  const [tick, forceUpdate] = useReducer(x => x + 1, 0)

  // * create mutable ref to store pending MUI operation
  const muiDataRef = useRef<MuiData<MuiOperation, any>>()

  if (!muiDataRef.current) {
    // * set the ref for the first time
    muiDataRef.current = new MuiData<MuiOperation, any>({
      operation,
      do: providerDo,
      forceUpdate
    })
  }

  return { muiDataRef, tick, forceUpdate }
}
