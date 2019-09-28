
import { useContext, useRef, useReducer } from 'react'

import { MuiCoreProvider } from '../core/Mui'
import { MuiData, IMuiDataResult } from '../core/MuiData'

import { getMuiContext } from '../components/MuiContext'

import { useDeepMemo } from './useDeepMemo'

export function useContent<MuiOperation, MuiDataDoResult> (operation: MuiOperation) {
  const muiContext = useContext(getMuiContext())

  /**
   * * We pass this dispatcher around to force React to re-render
   * * for example when our data finally loads
   */
  const [tick, forceUpdate] = useReducer(x => x + 1, 0)

  // * create mutable ref to store pending MUI operation
  const muiDataRef = useRef<MuiData<MuiOperation, MuiDataDoResult>>()

  const provider = muiContext.provider as MuiCoreProvider<MuiOperation, IMuiDataResult<MuiDataDoResult>>

  if (!muiDataRef.current) {
    // * set the ref for the first time
    muiDataRef.current = new MuiData<MuiOperation, MuiDataDoResult>({
      operation,
      do: provider.doFetch.bind(provider),
      forceUpdate
    })
  }

  const muiData = useDeepMemo(
    () => muiDataRef.current!.executeDo(),
    { muiContext, operation, tick }
  )

  /**
   * * redo is a generic name for re-executing a MuiProvider do,
   * * so we thinly wrap muiData.redo() here
   * * with to make an API specific to fetching content, refetchContent()
   */
  return { ...muiData, refetchContent: () => muiData.redo() }
}
