import { FaListUl } from "react-icons/fa";
import { setCurrentObject } from "../helpers/helper";
import categoryList from "../constant/categoryList";
import styles from "./Categories.module.css";

function Categories({ setQuery, query }) {
  const categoryHandler = (ev) => {
    if (ev.target.tagName !== "LI") return;
    const category = ev.target.innerText.toLowerCase();
    setQuery((query) => setCurrentObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <h3>Categories</h3>
      </div>
      <ul onClick={categoryHandler}>
        {categoryList.map((category) => (
          <li className={query.category === category.type.toLowerCase() ? styles.selected : null} key={category.id}>{category.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
