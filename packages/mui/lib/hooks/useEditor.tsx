
import React, { useContext } from 'react'

import { MuiCoreProvider } from '../core/Mui'
import { IMuiDataResult } from '../core/MuiData'

import { getMuiContext } from '../components/MuiContext'

import { useBase } from './common/useBase'

/**
 * * The operation can be provided when invoking the hook or when invoking storeContent()
 */
export function useEditor<MuiOperation, MuiDataDoResult> (operation?: MuiOperation) {
  const muiContext = useContext(getMuiContext())

  const provider = muiContext.provider as MuiCoreProvider<MuiOperation, IMuiDataResult<MuiDataDoResult>>

  const { muiDataRef } = useBase(operation, provider.doStore.bind(provider))

  return {
    isAuthoring: muiContext.isAuthoring,
    // * The MuiEditor Component
    // @ts-ignore
    Editor: ({ children, editorComponent }) => (<div onClick={() => editorComponent }>{children}</div>),
    // ? should this be memoized?
    storeContent: (operation?: MuiOperation) =>
      muiDataRef.current!.executeDo(operation)
  }
}
