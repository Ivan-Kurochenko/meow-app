import Flower from "./Flower.jsx";

const flowersEmoji = ["🌸", "🌼", "🌻", "🌹", "🌺", "🪻"];

function getRandomFlowerEmoji() {
  return flowersEmoji[Math.floor(Math.random() * flowersEmoji.length)];
}

function getRandomPosition() {
  const top = Math.random() * 90;
  const left = Math.random() * 90;
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
