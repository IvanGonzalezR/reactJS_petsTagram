import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { store } from './store'
import { Provider } from 'react-redux'

const client = new ApolloClient({
  uri: 'https://petgram-server-24iykciv5.now.sh/graphql',
  cache: new InMemoryCache()
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App className="App" />
    </ApolloProvider>
  </Provider>
);
