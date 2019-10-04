
import { MuiProviderDo, MuiDoResultCallback } from './Mui'

export interface IMuiDataResult<MuiDataDoResult> {
  loading: boolean
  error: any
  data: MuiDataDoResult | undefined | null
  redo: Function
}

export interface IMuiData<MuiOperation, MuiDataDoResult> {
  operation: MuiOperation
  do: MuiProviderDo<MuiOperation, IMuiDataResult<MuiDataDoResult>>
  forceUpdate: any
}

export class MuiData<MuiOperation, MuiDataDoResult> implements IMuiDataResult<MuiDataDoResult> {
  private operation: MuiOperation
  private do: MuiProviderDo<MuiOperation, IMuiDataResult<MuiDataDoResult>>
  private forceUpdate: any

  /**
   * * These fields are exposed by the executeAction()
   * * and the values on IMuiDataDoResult, along with redo()
   */
  loading = true
  error: any
  data: MuiDataDoResult | null | undefined

  private pendingDo: Function | undefined

  constructor ({ operation, do: muiDo, forceUpdate }: IMuiData<MuiOperation, MuiDataDoResult>) {
    this.operation = operation
    this.do = muiDo
    this.forceUpdate = forceUpdate
  }

  executeDo (operation?: MuiOperation): IMuiDataResult<MuiDataDoResult> {
    if (!this.pendingDo) {
      this.loading = true
      this.error = null
      this.data = null

      /**
       * * Set pendingOperation to a function that just invokes
       * * the do, so subsequent calls will not reinvoke the do
       */
      this.pendingDo = () =>
        this.do(
          operation || this.operation,
          this.dataResultCb.bind(this)
        )

      this!.pendingDo()
    }

    return this
  }

  /**
   * * Clear pendingOperation, so that it will be invoked on the next
   * * call to executeDo.
   */
  redo () {
    delete this.pendingDo
  }

  private dataResultCb: MuiDoResultCallback<IMuiDataResult<MuiDataDoResult>> = async (err, data) => {
    this.loading = false
    this.error = err
    this.data = data

    // * Trigger a render in React
    this.forceUpdate()

    return this
  }
}
