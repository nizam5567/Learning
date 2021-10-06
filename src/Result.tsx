import { MDBContainer, MDBCard, MDBCardHeader, MDBCardBody, MDBCardText } from "mdbreact";
import { Link } from "react-router-dom";
import BottomLinks from "./common/BottomLinks";
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from "react-bootstrap";
import "./Result.css";

const Result = (props: any) => {
    console.log("resultDetails", props.resultDetails);

    let resultImage = "/images/goodJob.png";

    let achievedPointsPercentage = (props.resultDetails.result * 100) / props.totalPoints;

    if(achievedPointsPercentage <= 33) {
        resultImage = "/images/fail.jpg";
    } else if (achievedPointsPercentage < 70) {
        resultImage = "/images/improve.jpg";
    }

    return (
        <div className="container">
            {/* <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">Result</MDBCardHeader>
                    <MDBCardBody>
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
            </MDBContainer> */}

            <div className="row">
                <div className="col-12" style={{ textAlign: "center", marginBottom: "10px" }}>
                    <img alt="Good Job" src={resultImage} height="250" />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6">
                    <Card style={{ textAlign: "center" }}>
                        <Card.Header>Your Score</Card.Header>
                        <Card.Body>
                            <Card.Title>{props.resultDetails.result}</Card.Title>
                            <Card.Text>
                                Out of {props.totalPoints}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="row resultItemBoxContainer">
                <div className="col-4">
                    <div className="resultItemBox resQue">
                        <div className="title">{props.resultDetails.totalQue}</div>
                        <p className="">Questions</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="resultItemBox resCorrect">
                        <div className="title">{props.resultDetails.countCorrectAns}</div>
                        <p className="">Correct</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="resultItemBox resWrong">
                        <div className="title">{(props.resultDetails.totalQue - props.resultDetails.countCorrectAns)}</div>
                        <p className="">Wrong</p>
                    </div>
                </div>
            </div>

            {props.resultDetails.suggestion &&
                <div className="row justify-content-center">
                    <div className="col-12">
                        <Card style={{ textAlign: "center" }}>
                            <Card.Header>Suggestion</Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    {/* {props.resultDetails.suggestion} */}
                                    Go to: 
                                        { <Link to={props.resultDetails.suggestionLink}>
                                            <button type="button" className="btn btn-secondary"
                                                style={{ paddingLeft: "30px", paddingRight: "30px", marginLeft: "20px"}}>
                                                    {props.resultDetails.suggestionLinkText}
                                                    </button>
                                        </Link> }
                                </Card.Title>
                                <Card.Text>

                                    {/* <div>Go to: 
                                        { <Link to={props.resultDetails.suggestionLink}>
                                            <button type="button" className="btn btn-primary"
                                                style={{ paddingLeft: "30px", paddingRight: "30px" }}>{props.resultDetails.suggestionLinkText}</button>
                                        </Link> }
                                    </div> */}

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            }

            <BottomLinks />
        </div>
    )
}

export default Result;