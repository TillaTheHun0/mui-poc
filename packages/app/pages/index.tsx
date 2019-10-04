
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { Button } from 'antd'

import { IMuiClient, MuiProvider } from '@mui-poc/mui'

import { AuthorableRichText } from '../client/components/Author/AuthorableRichText'
import { IMuiOperation } from '../client/types/mui'

let someContent = 'some awesome for rich text with uid'

/**
 * * Here is our MuiClient implementation
 * * We are simply simulating a request, but we could do really anything to fetch
 * * content here
 */
const muiClient: IMuiClient<IMuiOperation> = {
  fetch: async (operation) => {
    const { variables } = operation

    // * simulate a request
    return new Promise(resolve => {
      setTimeout(() => resolve({ text: `${someContent} ${variables.uid}` }), 3000)
    })
  },
  store: async (operation) => {
    const { variables } = operation

    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ text: variables })
        someContent = variables.text
      })
    })
  },
  isAuthoringMode: () => Promise.resolve(false)
}

const Title = styled.h1`
  font-size: 50px;
  color: green;
`

const Index = () => (
  <MuiProvider client={muiClient} options={{}}>
    <div>
      <Title data-cy='title'>My page</Title>
      <Link href='/about'>
        <Button type='primary'>Go to About Page</Button>
      </Link>

      <AuthorableRichText uid={'myTextUid-1234'} text={'Some Awesome Default'} />
      <br />
      <AuthorableRichText uid={'myTextUid-abcgc'} text={'Some Awesome Seocnd Default'} />
    </div>
  </MuiProvider>
)

export default Index
