import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'


const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/cji9bptpe0rtj0130xatu2a7d'

const client = new ApolloClient({
    link: new HttpLink({ uri: GRAPHCMS_API }),
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
