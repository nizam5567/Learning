// import React from "react";

import { MDBContainer, MDBCard, MDBCardHeader, MDBCardBody } from "mdbreact";

const CorrectAns = (props: any) => {
    const givenQueAnsObj = props.givenQueAnsObj;
    console.log(givenQueAnsObj);
    const correctAns = givenQueAnsObj.queObj.answers.find((item: any) => { return item.isCorrect === true }).title;

    return (
        <div className="container">
            {/* <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">Result</MDBCardHeader>
                    <MDBCardBody>
                        </MDBCardBody>
                </MDBCard>
            </MDBContainer> */}
            {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}

            <h1 style={{ color: givenQueAnsObj.isAnsCorrect ? 'green' : 'red' }}>Your answer is <strong>{givenQueAnsObj.isAnsCorrect ? 'correct' : 'wrong'}</strong></h1>
            {!givenQueAnsObj.isAnsCorrect && <div style={{ marginTop: "50px" }}>
                <h2>Correct answer is <br /><strong>{correctAns}</strong></h2>
            </div>}
            {/* <button type="button" className="btn btn-primary">Primary</button> */}

        </div>

    );
}

export default CorrectAns;