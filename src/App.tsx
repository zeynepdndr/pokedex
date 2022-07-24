import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import PokemonContextProvider from "./store/PokemonProvider";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonContextProvider>
        <Layout>
          <Dashboard />
        </Layout>
      </PokemonContextProvider>
    </ApolloProvider>
  );
}

export default App;
