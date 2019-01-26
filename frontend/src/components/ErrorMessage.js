import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null

  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <div key={i}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {error.message.replace('GRaphQL error: ', '')}
        </p>
      </div>
    ))
  }

  return (
    <div>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </div>
  )
}

DisplayError.defaultProps = {
  error: {}
}

DisplayError.prototypes = {
  error: PropTypes.object
}

export default DisplayError
