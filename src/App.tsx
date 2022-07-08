import { useState } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app",
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Layout>
        <>
          {false && <Login />}
          {true && <Dashboard />}
        </>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
