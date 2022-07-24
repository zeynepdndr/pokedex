import Pokemons from "../Pokemons/Pokemons";
import Card from "../UI/Card/Card";
import styles from "./Dashboard.module.css";
import { useContext, useEffect } from "react";
import PokemonContext from "../../store/pokemon-context";
import Chart from "../Chart/Chart";
import pokeball from "../../img/pokeball.png";
import Login from "../Login/Login";

const Dashboard = () => {
  const pokemonCtx = useContext(PokemonContext);
  const { selectedItem: pokemon, isLoggedIn } = pokemonCtx;

  console.log("is:", isLoggedIn);

  useEffect(() => {
    console.log("changed");
  }, [isLoggedIn]);

  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
        <>
          <Pokemons />
          <Card className={styles["selected-pokemon"]}>
            <header>
              {pokemon && (
                <div className={styles["pokemon-heading"]}>
                  <span className={styles["pokemon-name"]}>
                    {pokemon?.name}
                  </span>
                  <span className={styles["pokemon-number"]}>
                    {pokemon?.number}
                  </span>
                </div>
              )}
              {!pokemon && (
                <div className={styles["pokemon-heading"]}>
                  <span className={styles["pokemon-number"]}>Pokedex</span>
                </div>
              )}
            </header>

            {pokemon && (
              <section id={styles["my-awesome-style"]}>
                <div id={styles["text"]}>
                  <h4>{pokemon?.classification}</h4>
                  <div>
                    is the second-heaviest Pokemon (regarding minimum weight)
                  </div>
                  <div className={styles["blackbox"]}>
                    <Chart />
                  </div>
                </div>
                <img src={pokemon?.image} alt={pokemon?.name} />
              </section>
            )}
            {!pokemon && (
              <>
                <div id={styles["explore"]}>
                  Use the items on the left to explore Pokémon by type, weight,
                  height, and more!
                  <img src={pokeball} alt="Pokeball" />
                </div>
              </>
            )}
          </Card>
        </>
      )}
    </>
  );
};

export default Dashboard;
