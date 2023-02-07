import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store'
import { useNavigate } from "react-router-dom";
import { Provider } from 'react-redux'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, ApolloLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// por si el link de abajo deja de funcar, usar este >
// https://petgram-server-anthony-3vrjckvsb.vercel.app/graphql

const authMiddleWare = new ApolloLink((operation, forward) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  }
  return forward(operation)
});

function useNavigates() {
  const navigate = useNavigate();
  navigate('/favorites');
}
const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    sessionStorage.removeItem('token');
    useNavigates();
    //redireccionar a la pagina de login
  }
});

const client = new ApolloClient({
  link: ApolloLink.from(
    [
      errorMiddleware,
      authMiddleWare,
      new createHttpLink({
        uri: 'https://petgram-server-24iykciv5.now.sh/graphql'
      }),
    ]
  ),
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
