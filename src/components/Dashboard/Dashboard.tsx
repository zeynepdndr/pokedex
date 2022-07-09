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
            <span className={styles["pokemon-number"]}>{pokemon?.number}</span>
          </div>
        </header>
        <section id={styles["my-awesome-style"]}>
          <div id={styles["text"]}>
            <h4>{pokemon?.classification}</h4>
            <div className={styles["blackbox"]}>
              1 tl çektin 1 aylık 25 tl. kredi 3 ay ertelem 3 ay vadeli 30 eylül
              ilk taksit 5 bin ilk kasım da(2447.80) 1810 =6068 2192 5814 4 ay
              vadeli aylık 1385 5538 6 ay vadeli 961tl ?5759
            </div>
          </div>
          <img src={pokemon?.image} alt={pokemon?.name} />
        </section>
      </Card>
    </>
  );
};

export default Dashboard;
