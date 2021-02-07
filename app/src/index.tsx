import "@babel/polyfill";
import * as React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { createGlobalStyle } from "styled-components";

import graphqlClient from "./api/graphql";
import Root from "./components/Root";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;600&display=swap');

    body {
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

render(
  <ApolloProvider client={graphqlClient}>
    <GlobalStyle />
    <Root />
  </ApolloProvider>,
  document.getElementById("app")
);
