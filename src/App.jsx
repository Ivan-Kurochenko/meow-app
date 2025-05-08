import IamBlushing from "./components/IamBlushing.jsx";
import {useState} from "react";
import Question from "./components/Question.jsx";
import IGotYou from "./components/IGotYou.jsx";

const App = () => {
    const [isSheSaidYes, setIsSheSaidYes] = useState(false);
    const [noClickTimes, setNoClickTimes] = useState(0);

    const onClick = (event) => {
        const whatSheSaid = event.target.textContent;

        if (whatSheSaid === "Yes") {
            setIsSheSaidYes(true);
        } else {
            setNoClickTimes(noClickTimes + 1);
        }
        // send message to telegram bot
    }

    if (isSheSaidYes) {
        return <IamBlushing/>;
    }

    if (noClickTimes === 3) {
        return <IGotYou/>;
    }
    return (
        <Question onClick={onClick} noClickTimes={noClickTimes}/>
    );
};

export default App;
