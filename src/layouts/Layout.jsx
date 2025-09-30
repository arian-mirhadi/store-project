import { RiShoppingCart2Line } from "react-icons/ri";
import { useCart } from "../helpers/helper.js";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Store Project</Link>
        <div>
          {state.counterItems > 0 && <p>{state.counterItems}</p>}
          <Link to="/checkout">
            <RiShoppingCart2Line />
          </Link>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Arian ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
