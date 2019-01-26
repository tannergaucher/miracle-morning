import React from 'react'
import gql from 'graphql-tag'
import Error from '../components/ErrorMessage'
import { Mutation } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../components/User'
import Fieldset from '../components/styles/Fieldset'

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`

class Signin extends React.Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => (
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault()
              await signin()
              this.setState({ email: '', password: '' })
            }}
          >
            <Fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign In</h2>
              <Error error={error} />
              <label htmlFor="email">
                <input
                  value={this.state.email}
                  type="email"
                  name="email"
                  placeholder="email"
                  autoComplete="username"
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="password">
                <input
                  value={this.state.password}
                  type="password"
                  name="password"
                  placeholder="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Sign In</button>
            </Fieldset>
          </form>
        )}
      </Mutation>
    )
  }
}

export default Signin
