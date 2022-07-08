import { useState, useContext } from "react";
import SweetPagination from "sweetpagination";
import PokemonItem from "../../Pokemons/PokemonItem";
import styles from "./Pagination.module.css";

const Pagination: React.FC<any> = (props) => {
  const [currentPageData, setCurrentPageData] = useState([props.items]);

  //   @TODO : Send PokemonItem component as a props to make this component reusable

  return (
    <div>
      {currentPageData.map((item) => (
        <PokemonItem key={item.id} pokemon={item} />
      ))}

      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={7}
        getData={props.items}
        navigation={true}
        getStyle={styles["pagination"]}
      />
    </div>
  );
};
export default Pagination;
