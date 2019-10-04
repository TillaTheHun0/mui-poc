
import { useContext } from 'react'

import { MuiCoreProvider } from '../core/Mui'
import { IMuiDataResult } from '../core/MuiData'

import { getMuiContext } from '../components/MuiContext'

import { useDeepMemo } from './common/useDeepMemo'
import { useBase } from './common/useBase'

export function useContent<MuiOperation, MuiDataDoResult> (operation: MuiOperation) {
  const muiContext = useContext(getMuiContext())

  const provider = muiContext.provider as MuiCoreProvider<MuiOperation, IMuiDataResult<MuiDataDoResult>>

  const { muiDataRef, tick } = useBase(operation, provider.doFetch.bind(provider))

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
