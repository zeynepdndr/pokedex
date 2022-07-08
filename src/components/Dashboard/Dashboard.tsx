import Pokemons from "../Pokemons/Pokemons";
import Card from "../UI/Card/Card";
import styles from "./Dashboard.module.css";

const Dashboard = (props) => {
  return (
    <>
      <Pokemons />
      <Card className={styles["selected-pokemon"]}>
        <header>
          <div className={styles["selected-pokemon-heading"]}>
            <span className={styles["pokemon-name"]}>Ivysaur</span>
            <span className={styles["pokemon-number"]}>#001</span>
          </div>
        </header>
        <div className={styles["my-awesome-style"]}></div>
      </Card>
    </>
  );
};

export default Dashboard;
