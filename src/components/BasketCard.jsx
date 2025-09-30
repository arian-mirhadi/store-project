import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { shortTitle } from "../helpers/helper";
import styles from "./BasketCard.module.css";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortTitle(title)}</p>
      <div>
        {quantity > 0 && (
          <>
            {(quantity === 1 && (
              <button
                onClick={() => clickHandler({ type: "REMOVE", payload: data })}
              >
                <MdDeleteOutline />
              </button>
            )) ||
              (quantity > 1 && (
                <button
                  onClick={() =>
                    clickHandler({ type: "DECREASE", payload: data })
                  }
                >
                  -
                </button>
              ))}
            <span>{quantity}</span>
            <button
              onClick={() => clickHandler({ type: "INCREASE", payload: data })}
            >
              +
            </button>
          </>
        )}
        {quantity === 0 && (
          <button
            onClick={() => clickHandler({ type: "ADD_ITEM", payload: data })}
          >
            <TbShoppingBagCheck />
          </button>
        )}
      </div>
    </div>
  );
}

export default BasketCard;
