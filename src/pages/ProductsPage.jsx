import { useEffect, useState } from "react";
import {
  categoryProducts,
  getInitialQuery,
  searchProducts,
  useProducts,
} from "../helpers/helper";
import CardsProduct from "../components/CardsProduct";
import styles from "./ProductsPage.module.css";
import Categories from "../components/Categories";
import SearchBox from "../components/SearchBox";
import Loader from "../components/Loader";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearch(query.search || "");

    let filtredProducts = searchProducts(products, query.search);
    filtredProducts = categoryProducts(filtredProducts, query.category);
    setDisplayed(filtredProducts);
    setSearchParams(query);
  }, [query]);
  return (
    <>
      <SearchBox setQuery={setQuery} search={search} setSearch={setSearch} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <CardsProduct key={product.id} data={product} />
          ))}
        </div>
        <div className={styles.sidebar}>
          <Categories setQuery={setQuery} query={query} />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
