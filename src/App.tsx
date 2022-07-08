import { useState } from "react";
import { ApolloProvider } from "react-apollo";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";

import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ApolloProvider client={client}>
      {" "}
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
