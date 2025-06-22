import CorrectAnswer from "./CorrectAnswer.jsx";

const WrongAnswer = ({ onClick, noClickTimes }) => {
  return (
    <>
      <p style={{ textAlign: "center" }}>
        Will you go for a walk with me? 👉👈
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <button
          className="yes"
          style={{
            ...(noClickTimes > 0
              ? {
                  height: `calc(${noClickTimes + 1}*60px)`,
                  width: `calc(${noClickTimes + 1}*80px)`,
                }
              : null),
          }}
          onClick={onClick}
        >
          Yes
        </button>
        {noClickTimes <= 2 && (
          <button className="no" onClick={onClick}>
            No
          </button>
        )}
      </div>

      {noClickTimes === 2 && <CorrectAnswer />}
    </>
  );
};

export default WrongAnswer;
