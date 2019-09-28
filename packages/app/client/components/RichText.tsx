
import React from 'react'

import gql from 'graphql-tag'

import { useContent } from '@mui-poc/mui'

import { IMuiOperation } from '../types/mui'

interface IRichTextContent {
  text: string
}

export interface IRichTextProps {
  text?: string
  uid: string
  children?: string
}

export const RichText: React.FC<IRichTextProps> = ({ text, uid }) => {
  /**
   * * Here we are using the useContent hook with Mui
   */
  const { loading, data, error } = useContent<IMuiOperation, IRichTextContent>({
    gqlQuery: gql`
      query getRichTextQuery ($uid: string) {
        richText (uid: $uid) {
          text
        }
      }
    `,
    variables: { uid }
  })

  text = data ? data.text : text

  return (
    <div>
      Loading: {`${loading}`} <br />
      data: {text} <br />
      err: {error} <br />
    </div>
  )
}
