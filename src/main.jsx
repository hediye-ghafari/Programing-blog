import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/theme";
import App from "./App";

import "./styles/index.css";
import "./styles/font.css";

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_APP_GRAPHCMS_URI,
  }),
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
