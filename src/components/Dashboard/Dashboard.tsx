import Pokemons from "../Pokemons/Pokemons";
import Card from "../UI/Card/Card";
import styles from "./Dashboard.module.css";

const Dashboard = (props) => {
  return (
    <div className={styles.dashboard}>
      <Card className={styles["pokemon-list"]}>
        <Pokemons />
      </Card>
      <Card className={styles["selected-pokemon"]}>
        <header>Ivysaur</header>
        <div className={styles.content}></div>
      </Card>
    </div>
  );
};

export default Dashboard;
