import { LuLayoutList } from "react-icons/lu";
import { findQuantity, shortTitle, useCart } from "../helpers/helper";
import { TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./CardsProduct.module.css";

function CardsProduct({ data }) {
  const { image, title, price, id } = data;
  const [state, dispatch] = useCart();
  const quantity = findQuantity(state, id);

  const clickHandler = ({ type }) => {
    dispatch({ type, payload: data });
  };
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortTitle(title)}</h3>
      <span>{price} $</span>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <LuLayoutList />
        </Link>
        <div>
          {quantity > 0 && (
            <>
              {(quantity === 1 && (
                <button onClick={() => clickHandler({ type: "REMOVE" })}>
                  <MdDeleteOutline />
                </button>
              )) ||
                (quantity > 1 && (
                  <button onClick={() => clickHandler({ type: "DECREASE" })}>
                    -
                  </button>
                ))}
              <span>{quantity}</span>
              <button onClick={() => clickHandler({ type: "INCREASE" })}>
                +
              </button>
            </>
          )}
          {quantity === 0 && (
            <button onClick={() => clickHandler({ type: "ADD_ITEM" })}>
              <TbShoppingBagCheck />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardsProduct;
