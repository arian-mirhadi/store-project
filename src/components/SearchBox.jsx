import { IoSearch } from "react-icons/io5";
import { setCurrentObject } from "../helpers/helper";
import styles from "./SearchBox.module.css";

function SearchBox({ setQuery, search, setSearch }) {
  const searchHandler = () => {
    setQuery((query) => setCurrentObject(query, { search }));
  };
  return (
    <div className={styles.searchBox}>
      <input
        value={search}
        onChange={(ev) => setSearch(ev.target.value.toLowerCase().trim())}
        type="text"
        placeholder="Search ..."
      />
      <button onClick={searchHandler}>
        <IoSearch />
      </button>
    </div>
  );
}

export default SearchBox;
