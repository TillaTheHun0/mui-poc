
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
