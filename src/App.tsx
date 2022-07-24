import PokemonContextProvider from "./store/PokemonProvider";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <PokemonContextProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </PokemonContextProvider>
  );
}

export default App;
