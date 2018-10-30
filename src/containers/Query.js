import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GetDataFromHasura = () => (
  <div>
    <h3>Query:</h3>
    <p>
      {`{
    profile(where: { name: { _like: "%j%" } }) {
      id
      name
    }
  }`}
    </p>
    <h3>Results:</h3>
    <Query
      query={gql`
        {
          profile(where: { name: { _like: "%j%" } }) {
            id
            name
          }
        }
      `}
    >
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

export default GetDataFromHasura
