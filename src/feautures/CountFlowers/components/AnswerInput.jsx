import {useState} from "react";

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
                display: "flex",
                flexDirection: "column",
            }}
        >
            <label>Count the flowers</label>
            <div style={{display: "flex", alignItems: "center"}}>
                <input
                    type="tel"
                    value={answer}
                    onChange={(e) => {
                        if (!isNaN(Number(e.target.value))) {
                            setAnswer(Number(e.target.value))
                        }
                    }}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default AnswerInput;
