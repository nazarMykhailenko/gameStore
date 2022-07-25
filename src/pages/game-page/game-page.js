import { useSelector } from "react-redux";
import { GameBuy } from "../../components/game-buy";
import { GameCover } from "../../components/game-cover";
import { GenreItem } from "../../components/game-genre";
import "./game-page.css";

const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);

  if (!game) return null;

  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
            frameBorder="null"
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Popular things about this product:</p>
          {game.genres.map((genre) => (
            <GenreItem genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { GamePage };
