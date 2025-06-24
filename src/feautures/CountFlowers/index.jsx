import { useEffect, useState } from "react";
import FlowerBouquet from "./components/FlowerBouquet.jsx";
import AnswerInput from "./components/AnswerInput.jsx";
import { sendMessage } from "../../api/index.js";
import IamBlushing from "./components/IamBlushing.jsx";
import CorrectAnswer from "./components/CorrectAnswer.jsx";

const CountFlowers = () => {
  const [isCorrect, setIsCorrect] = useState(null);
  const totalFlowers = Math.floor(Math.random() * 3) + 3;

  useEffect(() => {
    sendMessage(`Total flowers: ${totalFlowers}.`);
  }, [totalFlowers]);

  if (isCorrect === true) {
    return <CorrectAnswer />;
  }

  if(isCorrect === false) {
      return <IamBlushing />;
  }

  return (
    <>
      <FlowerBouquet totalFlowers={totalFlowers} />
      <AnswerInput
        totalFlowers={totalFlowers}
        onSubmit={(answer) => {
          setIsCorrect(answer);
        }}
      />
    </>
  );
};

export default CountFlowers;
