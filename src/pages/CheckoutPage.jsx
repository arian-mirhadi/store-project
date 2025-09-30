import { useCart } from "../helpers/helper.js";
import BasketCard from "../components/BasketCard.jsx";
import styles from "./Checkout.module.css";
import Sidebar from "../components/Sidebar.jsx";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = ({ type, payload }) => {
    dispatch({ type, payload });
  };
  if (!state.counterItems) {
    return (
      <div>
        <p>Empty</p>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        {!!state.counterItems && (
          <div className={styles.sidebar}>
            <Sidebar state={state} />
          </div>
        )}
        <div className={styles.products}>
          {state.selectedItems.map((product) => (
            <BasketCard
              key={product.id}
              data={product}
              clickHandler={clickHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CheckoutPage;
