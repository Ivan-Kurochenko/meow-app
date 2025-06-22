import { useEffect, useState } from "react";
import FlowerBouquet from "./components/FlowerBouquet.jsx";
import AnswerInput from "./components/AnswerInput.jsx";
import { sendMessage } from "../../api/index.js";
import IamBlushing from "./components/IamBlushing.jsx";

const CountFlowers = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const totalFlowers = Math.floor(Math.random() * 8) + 3;

  useEffect(() => {
    sendMessage(`Total flowers: ${totalFlowers}.`);
  }, [totalFlowers]);

  if (isCorrect) {
    return <IamBlushing />;
  }

  return (
    <>
      <FlowerBouquet totalFlowers={totalFlowers} />
      <AnswerInput
        totalFlowers={totalFlowers}
        onCorrectAnswer={() => {
          setIsCorrect(true);
        }}
      />
    </>
  );
};

export default CountFlowers;
