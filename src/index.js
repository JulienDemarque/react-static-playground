import React from 'react'
import ReactDOM from 'react-dom'

// Your top level component
import App from './App'
import client from './connectors/apollo'
import gql from "graphql-tag";


//Fetching Hasura with client.query:
//----------------------------------
//This is not working in build time. only in dev server... So I am using the setup given by React-Static Apollo config
// const client = new ApolloClient({
//   uri: 'https://happypanda-hasura-playground.herokuapp.com/v1alpha1/graphql',
// })

client.query({
  query: gql`{profile { id name }}`
}).then(response => console.log("using client without ApolloProvider: ", response));
//----------------------------------

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}
