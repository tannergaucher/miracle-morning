import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import Error from '../components/ErrorMessage'
import { CURRENT_USER_QUERY } from '../components/User'
import Fieldset from '../components/styles/Fieldset'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`

class Signup extends React.Component {
  state = {
    email: '',
    name: '',
    password: ''
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault()
              await signup()
              this.setState({ name: '', email: '', password: '' })
            }}
          >
            <Fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign Up</h2>
              <Error error={error} />
              <label htmlFor="email">
                <input
                  value={this.state.email}
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="name">
                <input
                  value={this.state.name}
                  type="text"
                  name="name"
                  placeholder="username"
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
              <button type="submit">Sign Up</button>
            </Fieldset>
          </form>
        )}
      </Mutation>
    )
  }
}

export default Signup
