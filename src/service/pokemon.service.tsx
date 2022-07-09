import { gql } from "apollo-boost";

export const GET_POKEMONS = gql`
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
`;

export const VIEW_USERS = gql`
  query ($id: Int) {
    getUserInfo(id: $id) {
      id
      name
      job_title
      email
    }
  }
`;
