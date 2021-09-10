import React, { useRef, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";



export default function TagList() {
    const tagData = [
        { id: 1, title: "Story", },
        { id: 2, title: "Lesson", },
    ];
    const [tags, setTags] = useState(tagData);

    return (
        <div className="container">
            <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">Study Types</MDBCardHeader>
                    <MDBCardBody>
                        {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                        <MDBCardText>
                            <MDBListGroup className="my-4 mx-4" style={{}}>
                                {/* <MDBListGroupItem color="primary">Morbi leo risus</MDBListGroupItem>
                    <MDBListGroupItem color="info">Vestibulum at eros</MDBListGroupItem> */}
                                {tagData.length && tagData.map((item, index) => {
                                    return (
                                        <MDBListGroupItem
                                            key={index}
                                            color={index % 2 !== 0 ? "primary" : "info"}>
                                            <Link to={"/storyCategory/" + item.id}>{item.title}</Link>
                                        </MDBListGroupItem>
                                    );
                                })}
                            </MDBListGroup>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>

        </div>
    );
}