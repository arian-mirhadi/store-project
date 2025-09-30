import { TbChecklist } from "react-icons/tb";
import styles from "./Sidebar.module.css";
import { FaHashtag } from "react-icons/fa";

function Sidebar({ state }) {
  const { totalPrice, counterItems, checkout } = state;
  return (
    <div className={styles.sidebar}>
      <div>
        <p>
          <TbChecklist />
          Total:
        </p>
        <span>{totalPrice}$</span>
      </div>
      <div>
        <p>
          <FaHashtag />
          Quantity:
        </p>
        <span>{counterItems}</span>
      </div>
      <div>
        <p>Status: </p>
        <span>{!checkout && "pending..."}</span>
      </div>
      <button>Checkout</button>
    </div>
  );
}

export default Sidebar;
