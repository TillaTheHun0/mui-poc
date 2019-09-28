
import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { styledTheme } from '../client/styles'

// automatically import all files ending in *.stories.js
const pages = require.context('../pages', true, /\.stories.tsx$/)
const components = require.context('../client', true, /\.stories.tsx$/)

const libs = [ pages, components ]

function loadStories() {
  libs.forEach(req => req.keys().forEach(f => req(f)))
}

addDecorator((story) => (
  <ThemeProvider theme={styledTheme}>
    {story(styledTheme)}
  </ThemeProvider>
))

configure(loadStories, module)
