import { useState } from "react";
import IamBlushing from "./components/IamBlushing.jsx";
import Question from "./components/Question.jsx";
import IGotYou from "./components/IGotYou.jsx";
import { sendMessage } from "../../api/index.js";

const WillYouGo = () => {
  const [isSheSaidYes, setIsSheSaidYes] = useState(false);
  const [noClickTimes, setNoClickTimes] = useState(0);

  const onClick = (event) => {
    const whatSheSaid = event.target.textContent;

    if (whatSheSaid === "Yes") {
      setIsSheSaidYes(true);
    } else {
      setNoClickTimes(noClickTimes + 1);
    }
    sendMessage(`She said ${whatSheSaid}.`);
  };

  if (isSheSaidYes) {
    return <IamBlushing />;
  }

  if (noClickTimes === 3) {
    return <IGotYou />;
  }
  return <Question onClick={onClick} noClickTimes={noClickTimes} />;
};

export default WillYouGo;
