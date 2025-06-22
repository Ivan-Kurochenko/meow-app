import { useEffect } from "react";
import FlowerBouquet from "./components/FlowerBouquet.jsx";
import AnswerInput from "./components/AnswerInput.jsx";
import { sendMessage } from "../../api/index.js";

const CountFlowers = () => {
  const totalFlowers = Math.floor(Math.random() * 8) + 3;

  useEffect(() => {
    sendMessage(`Total flowers: ${totalFlowers}.`);
  }, [totalFlowers]);

  return (
    <>
      <FlowerBouquet totalFlowers={totalFlowers} />
      <AnswerInput correctFlowers={totalFlowers} onSubmit={() => {}} />
    </>
  );
};

export default CountFlowers;
