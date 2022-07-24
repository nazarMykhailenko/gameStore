import "./items-in-cart.css";

let ItemsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className="items-in-cart">{quantity}</div> : null;
};

export { ItemsInCart };
