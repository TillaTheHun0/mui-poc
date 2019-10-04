
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { Button } from 'antd'

import { MuiProvider } from '@mui-poc/mui'

import { AuthorableRichText } from '../client/components/Author/AuthorableRichText'
import { muiClient } from '../client/lib/muiClient'

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

      <AuthorableRichText uid={'myTextUid-1234'} text={'This Content will Error'} />
      <br />
      <AuthorableRichText uid={'myTextUid-abcgc'} text={'Some Awesome Second Default Content'} />
    </div>
  </MuiProvider>
)

export default Index
