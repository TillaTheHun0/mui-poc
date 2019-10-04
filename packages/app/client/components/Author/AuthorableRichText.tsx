
import React from 'react'

import gql from 'graphql-tag'

import { useContent } from '@mui-poc/mui'

import { IMuiOperation } from '../../types/mui'

import { RichText } from '../RichText'

interface IRichTextContent {
  text: string
}

export interface IRichTextProps {
  uid: string
  text?: string
  children?: string
}

export const AuthorableRichText: React.FC<IRichTextProps> = ({ uid, text }) => {
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
      err: {error} <br />
      {/* My dumb component here */}
      <RichText text={text} />
    </div>
  )
}
