import { Routes, Route, Navigate } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import DetailProduct from "./pages/DetailProduct";
import NotFound404 from "./pages/NotFound404";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <CartProvider>
        <ProductsProvider>
          <Layout>
            <Routes>
              <Route index element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/products/:id" element={<DetailProduct />} />
              <Route path="/*" element={<NotFound404 />} />
            </Routes>
          </Layout>
        </ProductsProvider>
      </CartProvider>
    </>
  );
}

export default App;
