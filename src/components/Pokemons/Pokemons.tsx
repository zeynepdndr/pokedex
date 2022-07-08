import { Query, QueryResult, useQuery } from "react-apollo";
import gql from "graphql-tag";
import PokemonItem from "./PokemonItem";
import Card from "../UI/Card/Card";

import styles from "./Pokemons.module.css";

// const POKEMON = gql`
//   {
//     pokemons(first: 10) {
//       id
//       number
//       name
//       image
//       classification
//       weight {
//         minimum
//         maximum
//       }
//       height {
//         minimum
//         maximum
//       }
//     }
//   }
// `;

const POKEMON = {
  data: {
    pokemons: [
      {
        id: "UG9rZW1vbjowMDE=",
        number: "001",
        name: "Bulbasaur",
        image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
        classification: "Seed Pokémon",
        weight: {
          minimum: "6.04kg",
          maximum: "7.76kg",
        },
        height: {
          minimum: "0.61m",
          maximum: "0.79m",
        },
      },
      {
        id: "UG9rZW1vbjowMDI=",
        number: "002",
        name: "Ivysaur",
        image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
        classification: "Seed Pokémon",
        weight: {
          minimum: "11.38kg",
          maximum: "14.63kg",
        },
        height: {
          minimum: "0.88m",
          maximum: "1.13m",
        },
      },
      {
        id: "UG9rZW1vbjowMDM=",
        number: "003",
        name: "Venusaur",
        image: "https://img.pokemondb.net/artwork/venusaur.jpg",
        classification: "Seed Pokémon",
        weight: {
          minimum: "87.5kg",
          maximum: "112.5kg",
        },
        height: {
          minimum: "1.75m",
          maximum: "2.25m",
        },
      },
      {
        id: "UG9rZW1vbjowMDQ=",
        number: "004",
        name: "Charmander",
        image: "https://img.pokemondb.net/artwork/charmander.jpg",
        classification: "Lizard Pokémon",
        weight: {
          minimum: "7.44kg",
          maximum: "9.56kg",
        },
        height: {
          minimum: "0.53m",
          maximum: "0.68m",
        },
      },
      {
        id: "UG9rZW1vbjowMDU=",
        number: "005",
        name: "Charmeleon",
        image: "https://img.pokemondb.net/artwork/charmeleon.jpg",
        classification: "Flame Pokémon",
        weight: {
          minimum: "16.63kg",
          maximum: "21.38kg",
        },
        height: {
          minimum: "0.96m",
          maximum: "1.24m",
        },
      },
      {
        id: "UG9rZW1vbjowMDY=",
        number: "006",
        name: "Charizard",
        image: "https://img.pokemondb.net/artwork/charizard.jpg",
        classification: "Flame Pokémon",
        weight: {
          minimum: "79.19kg",
          maximum: "101.81kg",
        },
        height: {
          minimum: "1.49m",
          maximum: "1.91m",
        },
      },
      {
        id: "UG9rZW1vbjowMDc=",
        number: "007",
        name: "Squirtle",
        image: "https://img.pokemondb.net/artwork/squirtle.jpg",
        classification: "Tiny Turtle Pokémon",
        weight: {
          minimum: "7.88kg",
          maximum: "10.13kg",
        },
        height: {
          minimum: "0.44m",
          maximum: "0.56m",
        },
      },
      {
        id: "UG9rZW1vbjowMDg=",
        number: "008",
        name: "Wartortle",
        image: "https://img.pokemondb.net/artwork/wartortle.jpg",
        classification: "Turtle Pokémon",
        weight: {
          minimum: "19.69kg",
          maximum: "25.31kg",
        },
        height: {
          minimum: "0.88m",
          maximum: "1.13m",
        },
      },
      {
        id: "UG9rZW1vbjowMDk=",
        number: "009",
        name: "Blastoise",
        image: "https://img.pokemondb.net/artwork/blastoise.jpg",
        classification: "Shellfish Pokémon",
        weight: {
          minimum: "74.81kg",
          maximum: "96.19kg",
        },
        height: {
          minimum: "1.4m",
          maximum: "1.8m",
        },
      },
      {
        id: "UG9rZW1vbjowMTA=",
        number: "010",
        name: "Caterpie",
        image: "https://img.pokemondb.net/artwork/caterpie.jpg",
        classification: "Worm Pokémon",
        weight: {
          minimum: "2.54kg",
          maximum: "3.26kg",
        },
        height: {
          minimum: "0.26m",
          maximum: "0.34m",
        },
      },
    ],
  },
};

const Pokemons = () => {
  // const { loading, error, data } = useQuery(POKEMON);

  // console.log(loading, error, data); // Stop at "true undefined undefined" 🥲

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;

  return (
    <Card className={styles["pokemon-list"]}>
      {POKEMON.data.pokemons.map((item) => (
        <PokemonItem key={item.id} pokemon={item} />
      ))}
    </Card>
  );
};

export default Pokemons;
