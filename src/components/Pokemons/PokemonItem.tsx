import Card from "../UI/Card/Card";
import styles from "./PokemonItem.module.css";

const PokemonItem = ({ pokemon }) => {
  return (
    <Card key={pokemon.id} className={styles["pokemon-item"]}>
      <img
        src={pokemon.image === undefined ? "" : `${pokemon.image}`}
        alt={pokemon.name}
      />
      <div className={styles["pokemon-item__description"]}>
        <span className={styles["pokemon-number"]}>{pokemon.number}</span>
        <span className={styles["pokemon-name"]}>{pokemon.name}</span>
      </div>
    </Card>
  );
};

export default PokemonItem;
