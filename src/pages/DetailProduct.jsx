import { Link, useParams } from "react-router-dom";
import { useProducts, findProduct, shortTitle } from "../helpers/helper.js";
import { IoMdArrowRoundBack, IoMdPricetag } from "react-icons/io";
import styles from "./DetailProduct.module.css";
import { SiOpenproject } from "react-icons/si";

function DetailProduct() {
  const products = useProducts();
  const params = useParams();
  const product = findProduct(products, +params.id);
  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} />
      <div className={styles.information}>
        <h2 className={styles.title}>{shortTitle(product.title)}</h2>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {product.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {product.price} $
          </span>
          <Link to="/products">
            <IoMdArrowRoundBack />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
