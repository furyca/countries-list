import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import '@fontsource/roboto/400.css';
import { ContextProvider } from './Context';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/graphql',
  }),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ApolloProvider client={client}>
    <ContextProvider >
      <App />
    </ContextProvider>
  </ApolloProvider>
);