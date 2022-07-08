import Pokemons from "../Pokemons/Pokemons";
import Card from "../UI/Card/Card";
import styles from "./Dashboard.module.css";
import { useContext } from "react";
import PokemonContext from "../../store/pokemon-context";
const Dashboard = () => {
  const pokemonCtx = useContext(PokemonContext);
  const pokemon = pokemonCtx.selectedItem;

  return (
    <>
      <Pokemons />
      <Card className={styles["selected-pokemon"]}>
        <header>
          <div className={styles["selected-pokemon-heading"]}>
            <span className={styles["pokemon-name"]}>{pokemon?.name}</span>
            <span className={styles["pokemon-number"]}>#001</span>
          </div>
        </header>
        <div className={styles["my-awesome-style"]}></div>
      </Card>
    </>
  );
};

export default Dashboard;
