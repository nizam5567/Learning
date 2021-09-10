import { MDBContainer, MDBCard, MDBCardHeader, MDBCardBody, MDBCardText, MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Link } from "react-router-dom";

const Result = () => {
    return (
        <div className="container">
            <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">Result</MDBCardHeader>
                    <MDBCardBody>
                        {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                        <MDBCardText>
Result
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>

        </div>
    )
}

export default Result;