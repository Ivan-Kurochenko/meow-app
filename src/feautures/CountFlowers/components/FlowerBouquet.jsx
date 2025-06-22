import Flower from "./Flower.jsx";

const flowersEmoji = ["🌸", "🌼", "🌻", "🌹", "🌺", "🪻"];

function getRandomFlowerEmoji() {
  return flowersEmoji[Math.floor(Math.random() * flowersEmoji.length)];
}

function getRandomPosition() {
  const top =
    Math.random() < 0.5
      ? Math.floor(Math.random() * 45) + 1
      : Math.floor(Math.random() * 36) + 55;
  const left =
    Math.random() < 0.5
      ? Math.floor(Math.random() * 34) + 1
      : Math.floor(Math.random() * 30) + 60;

  return { top, left };
}

function FlowerBouquet({ totalFlowers }) {
  const flowers = Array.from({ length: totalFlowers }, () => {
    const emoji = getRandomFlowerEmoji();
    const { top, left } = getRandomPosition();
    return { emoji, top, left };
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {flowers.map((flower, i) => (
        <Flower key={i} {...flower} />
      ))}
    </div>
  );
}

export default FlowerBouquet;
