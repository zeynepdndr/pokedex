import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Layout>
      <>
        {false && <Login />}
        {true && <Dashboard />}
      </>
    </Layout>
  );
}

export default App;
