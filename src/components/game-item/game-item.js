import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GameCover } from "../game-cover";
import { GameBuy } from "../game-buy";
import { GenreItem } from "../game-genre";
import { setCurrentGame } from "../../redux/games/reducer";
import "./game-item.css";

const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };
  return (
    <div className="game-item" onClick={handleClick}>
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
