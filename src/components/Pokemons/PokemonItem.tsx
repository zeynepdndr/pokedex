import Card from "../UI/Card/Card";
import styles from "./PokemonItem.module.css";

const PokemonItem = ({ pokemon }) => {
  return (
    <Card key={pokemon.id} className={styles["pokemon-item"]}>
      <img
        src={pokemon.image === undefined ? "" : `${pokemon.image}`}
        alt={pokemon.name}
      />
      <div className={styles["book-pokemon__description"]}>
        <h2>{pokemon.name}</h2>
        <div className={styles["book-pokemon__page"]}>{pokemon.page}</div>
      </div>
    </Card>
  );
};

export default PokemonItem;
