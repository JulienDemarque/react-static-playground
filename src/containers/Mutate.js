import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const ADD_PROFILE = gql`
  mutation insert_profile {
    insert_profile(objects: [{ id: 9, name: "didier" }]) {
      returning {
        id
        name
      }
    }
  }
`
const AddProfile = () => (
  <Mutation mutation={ADD_PROFILE}>
    {(addProfile, { data }) => (
      <div>
        <button
          onClick={e => {
            e.preventDefault()
            addProfile()
          }}
        >
          Click to send graphql mutation
        </button>
      </div>
    )}
  </Mutation>
)

export default AddProfile
