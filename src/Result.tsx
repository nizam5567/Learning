import { MDBContainer, MDBCard, MDBCardHeader, MDBCardBody, MDBCardText } from "mdbreact";

const Result = (props: any) => {
    return (
        <div className="container">
            <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">Result</MDBCardHeader>
                    <MDBCardBody>
                        {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                        <h2>You have completed Part 1</h2>
                        <h1>Result : {props.result} out of {props.totalPoints} Points</h1>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>

        </div>
    )
}

export default Result;