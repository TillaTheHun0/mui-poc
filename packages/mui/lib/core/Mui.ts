
export type MuiDoResultCallback<MuiDoResult> =
  (err: Error | undefined | null, data: any) => Promise<MuiDoResult>

export type MuiProviderDo<MuiOperation, MuiDoResult> =
  (operation: MuiOperation, dataResultCb: MuiDoResultCallback<MuiDoResult>) => Promise<MuiDoResult>

// ? * Eventually come up with some useful MuiProviderOptions
export type IMuiProviderOptions = any

/**
 * * Interface that describes the client API
 * * that must be implemented by a provided MuiClient
 */
export interface IMuiClient<MuiOperation> {
  fetch: (operation: MuiOperation, options: IMuiProviderOptions) => Promise<{}>
  store: (operation: MuiOperation, options: IMuiProviderOptions) => Promise<{}>
  isAuthoringMode: () => Promise<boolean>
}

export interface IMuiProviderArgs<MuiOperation> {
  client: IMuiClient<MuiOperation>
  options: IMuiProviderOptions
}

export class MuiCoreProvider<MuiOperation, MuiDoResult> {
  private client: IMuiClient<MuiOperation>
  private options: any

  constructor ({ client, options }: IMuiProviderArgs<MuiOperation>) {
    this.client = client
    this.options = options
  }

  doFetch: MuiProviderDo<MuiOperation, MuiDoResult> = async (operation, dataResultCb) => {
    try {
      // some Mui things here with options
      const clientRes = await this.client.fetch(operation, this.options)
      // some Mui thigns here with options
      return dataResultCb(null, clientRes)
    } catch (err) {
      return dataResultCb(err, null)
    }
  }

  doStore: MuiProviderDo<MuiOperation, MuiDoResult> = async (operation, dataResultCb) => {
    try {
      // some Mui things here with options
      const clientRes = await this.client.store(operation, this.options)
      // some Mui thigns here with options
      return dataResultCb(null, clientRes)
    } catch (err) {
      return dataResultCb(err, null)
    }
  }

  isAuthoring = async (dataResultCb: MuiDoResultCallback<boolean>) => {
    try {
      const isAuthoring = await this.client.isAuthoringMode()
      return dataResultCb(null, isAuthoring)
    } catch (err) {
      return dataResultCb(err, null)
    }
  }
}
