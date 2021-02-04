import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from "@apollo/client";

import "./assets/styles/app.css"
import SingUp from "./components/SingUp";

import {AppComponent} from "./common/styles";

const link = from([
    new HttpLink({ uri: "https://homework.nextbil.com/graphql" }),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

export default function App() {
  return (
      <ApolloProvider client={client}>
        <AppComponent>
            <SingUp />
        </AppComponent>
     </ApolloProvider>
  );
}
