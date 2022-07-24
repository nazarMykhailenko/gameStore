import { Button } from "../button";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";
import { CartItem } from "../cart-item";

let CartMenu = ({ items, onClick }) => {
  let totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-menu">
      <div className="cart-menu__game-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                id={game.id}
                price={game.price}
                title={game.title}
              />
            ))
          : `Cart is empty`}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total:</span>
            <span>{totalPrice}$</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Comfirm
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export { CartMenu };
