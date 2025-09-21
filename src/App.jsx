import "./App.css";
import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import Display from "./components/Display";
import KeyPad from "./components/KeyPad";
import History from "./components/History";

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      return;
    }
    if (value === "=") {
      try {
        let result = evaluate(input);
        result = parseFloat(result.toFixed(10));
        setInput(result.toString());
        let newRecord = `${input} = ${result}`;
        setHistory((prev) => [newRecord, ...prev].slice(0, 5));
      } catch {
        setInput("Error");
      }
      return;
    }
    setInput((prev) => prev + value);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      const allowed = "0123456789.+-*/%";

      if (allowed.includes(key)) {
        handleClick(key);
      } else if (key === "Enter") {
        handleClick("=");
      } else if (key === "Escape") {
        handleClick("C");
      } else if (key === "Backspace") {
        setInput(prev => prev.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  return (
    <div>
      <div className="container">
        <h2>React 계산기</h2>
        <Display value={input} />
        <button onClick={() => setShowHistory((prev) => !prev)}>
          {showHistory ? "나가기" : "계산기록"}
        </button>
        {showHistory ? (
          <History records={history} onKey={setHistory} />
        ) : (
          <KeyPad onKey={handleClick} />
        )}
      </div>
      {input === "Error" ? <p className="error">잘못된 수식!</p> : null}
    </div>
  );
}

export default App;
