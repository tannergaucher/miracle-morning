import { Query } from 'react-apollo'
import styled from 'styled-components'
import { CURRENT_USER_QUERY } from './User'
import Signin from './Signin'
import Signup from './Signup'

const StyledPleaseSignIn = styled.div`
  .forms {
    display: flex;
    flex-wrap: wrap;
  }
`

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>loading</p>
      if (!data.me) {
        return (
          <StyledPleaseSignIn>
            <p>Please sign in</p>
            <div className="forms">
              <Signin />
              <Signup />
            </div>
          </StyledPleaseSignIn>
        )
      }
      return props.children
    }}
  </Query>
)

export default PleaseSignIn
