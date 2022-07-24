import { GameCover } from "../game-cover";
import { GameBuy } from "../game-buy";
import { GenreItem } from "../game-genre";
import "./game-item.css";

const GameItem = ({ game }) => {
  return (
    <div className="game-item">
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <GenreItem genre={genre} key={game.id} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export { GameItem };
