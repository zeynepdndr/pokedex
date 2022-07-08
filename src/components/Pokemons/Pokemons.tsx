import { Query, QueryResult } from "react-apollo";
import gql from "graphql-tag";

const Pokemons = () => (
  <Query
    query={gql`
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
        <div key={item.login}>
          <p>{item.login}</p>
        </div>;
      });
    }}
  </Query>
);
export default Pokemons;
