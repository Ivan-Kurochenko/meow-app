import { useState } from "react";

const AnswerInput = ({ totalFlowers, onCorrectAnswer }) => {
  const [answer, setAnswer] = useState(0);

  const handleSubmit = () => {
    if (answer === totalFlowers) {
      onCorrectAnswer(totalFlowers);
    } else {
      alert("Incorrect answer!");
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>Count the flowers</label>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(Number(e.target.value))}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AnswerInput;
