import React from "react";


const CorrectAns = (props: any) => {
    const givenQueAnsObj = props.givenQueAnsObj;
    console.log(givenQueAnsObj);    
    const correctAns = givenQueAnsObj.queObj.answers.find((item: any) => {return item.isCorrect === true}).title;
    
    return (
        <div>
            <h1>Your answer is <strong>{givenQueAnsObj.isAnsCorrect? 'correct': 'wrong'}</strong></h1>
            {!givenQueAnsObj.isAnsCorrect && <div style={{marginTop:"50px"}}>
            <h2>Correct answer is <br/><strong>{correctAns}</strong></h2>
            </div>}
            {/* <button type="button" className="btn btn-primary">Primary</button> */}
        </div>
    );
}

export default CorrectAns;