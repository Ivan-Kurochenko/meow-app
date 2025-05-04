import Warning from "./Warning.jsx";

const Question = ({onYesClick, onNoClick, noClickTimes}) => {

    return (
        <>
            <p style={{textAlign: "center"}}>Will you go for a walk with me? 👉👈</p>
            <div style={{display: 'flex', justifyContent: "center", alignItems: "center", gap: '2rem'}}>
                <button className="yes" style={{
                    ...(noClickTimes > 0 ? {
                        height: `calc(${noClickTimes + 1}*60px)`,
                        width: `calc(${noClickTimes + 1}*80px)`
                    } : null)
                }}
                        onClick={onYesClick}>Yes
                </button>
                {noClickTimes <= 2 && (
                    <button className="no" onClick={onNoClick}>No</button>
                )}
            </div>

            {noClickTimes === 2 && (
                <Warning/>
            )}
        </>
    );
};

export default Question;
