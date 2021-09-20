import { MDBContainer, MDBCard, MDBCardHeader, MDBCardBody, MDBCardText } from "mdbreact";
import { Link } from "react-router-dom";

const Result = (props: any) => {
    console.log("resultDetails", props.resultDetails);
    return (
        <div className="container">
            <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">Result</MDBCardHeader>
                    <MDBCardBody>
                        {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                        <h2>You have completed Part 1</h2>
                        <h1>Result : {props.result} out of {props.totalPoints} Points</h1>
                        {props.resultDetails.suggestion && <>
                            <h3>Suggestion: {props.resultDetails.suggestion}</h3>
                            <div>Suggestion Link: 
                                <Link to={props.resultDetails.suggestionLink}>
                                    <button type="button" className="btn btn-primary"
                                        style={{ paddingLeft: "30px", paddingRight: "30px" }}>{props.resultDetails.suggestionLinkText}</button>
                                </Link>
                            </div>
                        </>}
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>

        </div>
    )
}

export default Result;