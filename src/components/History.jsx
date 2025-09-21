import "../App";

function History({ records, onKey }) {
  return (
    <div className="history">
      <ol>
        {records.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ol>
      <button onClick={() => onKey([])}>기록 삭제</button>
    </div>
  );
}

export default History;
