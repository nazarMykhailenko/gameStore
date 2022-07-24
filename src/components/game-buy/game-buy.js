import "./game-buy.css";
import { Button } from "../button";

const GameBuy = ({ game }) => {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price}$</span>
      <Button type="primary" onClick={() => null}>
        To Cart
      </Button>
    </div>
  );
};

export { GameBuy };
