import { Query, QueryResult } from "react-apollo";
import gql from "graphql-tag";
import PokemonItem from "./PokemonItem";
import Card from "../UI/Card/Card";

import styles from "./Pokemons.module.css";

const Pokemons = () => (
  <Query
    query={gql`
      {
        pokemons(first: 10) {
          id
          number
          name
          image
          classification
          weight {
            minimum
            maximum
          }
          height {
            minimum
            maximum
          }
        }
      }
    `}
  >
    {(result: QueryResult) => {
      const { loading, error, data } = result;

      // ...rest here
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error!</p>;

      return data.viewer.map((item) => {
        <Card className={styles["pokemon-item "]}>
          <PokemonItem pokemon={item} />
        </Card>;
      });
    }}
  </Query>
);
export default Pokemons;

//   {
//     allCourses {
//       id
//       title
//       author
//       description
//       topic
//       url
//     }
//   }
