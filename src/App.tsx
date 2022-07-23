import { useContext } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import PokemonContextProvider from "./store/PokemonProvider";
import PokemonContext from "./store/pokemon-context";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app",
});

function App() {
  const pokemonCtx = useContext(PokemonContext);
  return (
    <ApolloProvider client={client}>
      <PokemonContextProvider>
        <Layout>
          {true && <Login />}
          {false && <Dashboard />}
        </Layout>
      </PokemonContextProvider>
    </ApolloProvider>
  );
}

export default App;
