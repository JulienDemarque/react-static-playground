import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'

const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://happypanda-hasura-playground.herokuapp.com/v1alpha1/graphql',
    headers: { 'X-Hasura-Access-Key': 'mysecretkey' },
  }),
  cache: new InMemoryCache(),
})

export default client
