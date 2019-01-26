import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo'

import theme from '../lib/theme'
import client from '../lib/withData'

import GlobalStyle from '../components/styles/GlobalStyle'
import Inner from './Inner'
import * as serviceWorker from '../serviceWorker'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Inner />
          </>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
