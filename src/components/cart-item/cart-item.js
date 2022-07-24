import "./cart-item.css";

let CartItem = ({ title, price, id }) => {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price}$</span>
      </div>
    </div>
  );
};

export { CartItem };
