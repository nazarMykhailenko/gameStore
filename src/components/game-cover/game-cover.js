import "./game-cover.css";

const GameCover = ({ image = "" }) => {
  let style = {
    backgroundImage: `url(${image})`,
  };
  return <div className="game-cover" style={style}></div>;
};

export { GameCover };
