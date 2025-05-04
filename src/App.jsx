import IamBlushing from "./components/IamBlushing.jsx";
import {useState} from "react";
import Question from "./components/Question.jsx";
import IGotYou from "./components/IGotYou.jsx";

const App = () => {

    const [isSheSaidYes, setIsSheSaidYes] = useState(false)
    const [noClickTimes, setNoClickTimes] = useState(0)

    const onYesClick = () => {
        console.log(new Date(), `She said yes from the ${noClickTimes + 1} time`)
        setIsSheSaidYes(true);
    }

    const onNoClick = () => {
        console.log(new Date(), 'No');
        setNoClickTimes(noClickTimes + 1);
    }

    if (isSheSaidYes) {
        return <IamBlushing/>
    }

    if (noClickTimes === 3) {
        return <IGotYou/>
    }
    return <Question onYesClick={onYesClick} onNoClick={onNoClick} noClickTimes={noClickTimes}/>
};

export default App;
