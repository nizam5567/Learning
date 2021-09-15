import { MDBContainer, MDBCard, MDBCardHeader, MDBCardBody, MDBCardText } from "mdbreact";
import { Link } from "react-router-dom";

const StoryDetails = (props: any) => {
    let storyId = 0;
    if (props.match.params.id) {
        storyId = parseInt(props.match.params.id);
    }

    const contentData = [
        { id: 1, title: "Sample story title 1", body: "Sample details 1", tagId: 1, storyCategoryId: 1 },
        { id: 2, title: "Sample story title 2", body: "Sample details 2", tagId: 1, storyCategoryId: 1 },
        { id: 3, title: "Sample story title 3", body: "Sample details 3", tagId: 1, storyCategoryId: 1 },
    ];

    const storyData = contentData.find(item => item.id === storyId);
    return (
        <div className="container">
            <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">{storyData?.title}</MDBCardHeader>
                    <MDBCardBody>
                        {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                        <MDBCardText>
                            {storyData?.body}
                        </MDBCardText>
                        {/* <button type="button" className="btn btn-primary"></button> */}
                        <Link to={"/storyQuestions/" + storyId}>Start Exam</Link>

                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
    );
}

export default StoryDetails;