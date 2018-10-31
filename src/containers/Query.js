import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const keyword = 'c'

const GET_PROFILE = gql`
  {
    profile(where: { name: { _like: "%${keyword}%" } }) {
      id
      name
    }
  }
`

const GetDataFromHasura = ({ keyword }) => {
  const GET_PROFILE = gql`
    {
      profile(where: { name: { _like: "%${keyword}%" } }) {
        id
        name
      }
    }
  `
  return (
    <div>
      <h3>Query:</h3>
      <p>
        {`{
      profile(where: { name: { _like: "%ju%" } }) {
        id
        name
      }
    }`}
      </p>
      <h3>Results:</h3>
      <Query query={GET_PROFILE}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          return data.profile.map(({ name }) => (
            <div key={name}>
              <p>{`${name}`}</p>
            </div>
          ))
        }}
      </Query>
    </div>
  )
}

export default GetDataFromHasura
