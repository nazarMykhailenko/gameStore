import "./cart-block.css";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu";
import { calcTotalPrice } from "../utils";
import { useState } from "react";
import { ItemsInCart } from "../items-in-cart";

export const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  let totalPrice = calcTotalPrice(items);
  let [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
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
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};
