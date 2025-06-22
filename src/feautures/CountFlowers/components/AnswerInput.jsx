const AnswerInput = ({totalFlowers, onSubmit}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
          display: "flex",
          flexDirection: "row",
      }}
    >
      <input type="text" placeholder="Count the flowers" />
        <button>Submit</button>
    </div>
  );
};

export default AnswerInput;
