import { createContext } from "react";
import { useEffect, useState } from "react";
import api from "../services/config.js";
const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setProducts((await api.get("/products")).data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, ProductsContext };
