import "../App";

function Button({ label, onClick }) {
  return (
    <span className="btn" onClick={() => onClick(label)}>
      {label}
    </span>
  );
}

export default Button;
