import "../App";
import Button from "./Button";

function KeyPad({onKey}) {
  const numbers = ["7", "8", "9",
                   "4", "5", "6",
                   "1", "2", "3",
                   "0", ".", "="];
  const operators = ["C", "+", "-", "*", "/", "%"];

  return (
    <div className="keypad">
      <div className="number">
        {numbers.map((n) => (
          <Button key={n} label={n} onClick={onKey} />
        ))}
      </div>
      <div className="operator">
        {operators.map((o) => (
          <Button key={o} label={o} onClick={onKey} />
        ))}
      </div>
    </div>
  );
}

export default KeyPad;
