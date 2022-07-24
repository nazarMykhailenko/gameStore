import classNames from "classnames";
import "./button.css";

function Button({ onClick, type, children, size = `s` }) {
  const btnClass = classNames({
    btn: true,
    "btn--secondary": type === "secondary",
    "btn--primary": type === "primary",
    "btn--small": type === "small",
    "btn--medium": type === "medium",
  });
  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
}

export { Button };
