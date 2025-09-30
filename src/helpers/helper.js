import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};

const shortTitle = (title) => {
  return title.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const filtredProducts = products.filter((i) =>
    i.title.toLowerCase().includes(search)
  );
  return filtredProducts;
};

const categoryProducts = (products, category) => {
  if (!category) return products;
  const filtredProducts = products.filter((i) => i.category === category);
  return filtredProducts;
};

const setCurrentObject = (currentQuery, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  } else if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  if (search) query.search = search;
  if (category) query.category = category;
  return query;
};

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

const sumProducts = (products) => {
  const counterItems = products.reduce(
    (counter, item) => counter + item.quantity,
    0
  );
  const totalPrice = products
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return { counterItems, totalPrice };
};

const findQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((i) => i.id === id);
  if (index === -1) return 0;
  else {
    return state.selectedItems[index].quantity;
  }
};

const findProduct = (products, id) => {
  const product = products.find((i) => i.id === id);
  return product;
};

export {
  useProducts,
  shortTitle,
  searchProducts,
  categoryProducts,
  setCurrentObject,
  getInitialQuery,
  useCart,
  sumProducts,
  findQuantity,
  findProduct,
};
