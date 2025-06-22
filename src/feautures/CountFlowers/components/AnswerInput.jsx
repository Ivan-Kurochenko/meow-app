import {useState} from "react";

const AnswerInput = ({correctFlowers, onSubmit}) => {
    const [value, setValue] = useState()

    const handleSubmit = () => {
        console.log(correctFlowers);

        onSubmit(correctFlowers);
    }

    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
                display: "flex",
                flexDirection: "row",
            }}
        >
            <input type="text" value={value} onChange={setValue} placeholder="Count the flowers"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AnswerInput;
