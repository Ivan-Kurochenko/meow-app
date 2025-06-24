import {useState} from "react";
import {Button} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const AnswerInput = ({totalFlowers, onSubmit}) => {
    const [answer, setAnswer] = useState(0);

    const handleSubmit = () => {
        if (answer === totalFlowers) {
            onSubmit(false);
            return;
        }

        if (answer === totalFlowers + 1) {
            onSubmit(true);
            return;
        }
        alert("Incorrect answer!");
    };

    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
                width: "200px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <label>Count the flowers</label>
            <div style={{display: "flex", alignItems: "center", fontSize: 32, justifyContent: "space-between", marginTop: 8, marginBottom: 8}}>
                <ArrowBackIosNewIcon height={"3em !important"} onClick={() => setAnswer(answer - 1)} />
                <span>{answer}</span>
                <ArrowForwardIosIcon height={"3em !important"} onClick={() => setAnswer(answer + 1)} />
            </div>
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </div>
    );
};

export default AnswerInput;
