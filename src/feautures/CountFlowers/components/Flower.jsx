function Flower({ emoji, top, left }) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${top}vh`,
        left: `${left}vw`,
        fontSize: "2rem",
        userSelect: "none",
      }}
    >
      {emoji}
    </div>
  );
}

export default Flower;
