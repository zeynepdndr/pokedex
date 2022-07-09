import Pokemons from "../Pokemons/Pokemons";
import Card from "../UI/Card/Card";
import styles from "./Dashboard.module.css";
import { useContext } from "react";
import PokemonContext from "../../store/pokemon-context";
import PokemonChart from "./PokemonChart";

const Dashboard = () => {
  const pokemonCtx = useContext(PokemonContext);
  const { selectedItem: pokemon, items: pokemons } = pokemonCtx;

  console.log("pokemonCtx", pokemonCtx.items);
  return (
    <>
      <Pokemons />
      <Card className={styles["selected-pokemon"]}>
        <header>
          <div className={styles["selected-pokemon-heading"]}>
            <span className={styles["pokemon-name"]}>{pokemon?.name}</span>
            <span className={styles["pokemon-number"]}>{pokemon?.number}</span>
          </div>
        </header>
        <section id={styles["my-awesome-style"]}>
          <div id={styles["text"]}>
            <h4>{pokemon?.classification}</h4>
            <div className={styles["blackbox"]}>
              {/* <PokemonChart selectedPokemon={pokemon} allPokemons={pokemons} /> */}
            </div>
          </div>
          <img src={pokemon?.image} alt={pokemon?.name} />
        </section>
      </Card>
    </>
  );
};

export default Dashboard;
