import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../utils";
import "./cart-block.css";

export const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  let totalPrice = calcTotalPrice(items);
  let [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const navigate = useNavigate();

  let handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate(`/order`);
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice}$</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
