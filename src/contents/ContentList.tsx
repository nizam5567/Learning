import React, { useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBCard, MDBCardBody, MDBCardHeader, MDBCardText } from "mdbreact";
import { Link } from "react-router-dom";


export default function ContentList(props: any) {
    let tagId = 0;
    let storyCategoryId = 0;
    if (props.match.params.tagId) {
        tagId = parseInt(props.match.params.tagId);
    }

    if (props.match.params.storyCategoryId) {
        storyCategoryId = parseInt(props.match.params.storyCategoryId);
    }

    const contentData = [
        { id: 1, title: "Sample story title 1", body: "Sample details 1", tagId: 1, storyCategoryId: 1 },
        { id: 2, title: "Sample story title 2", body: "Sample details 2", tagId: 1, storyCategoryId: 1 },
        { id: 3, title: "Sample story title 3", body: "Sample details 3", tagId: 1, storyCategoryId: 1 },
    ];

    const storyCategoriesData = [
        { id: 1, title: "Upwork", },
        { id: 2, title: "Software Company", },
        { id: 3, title: "Digital Agency", },
    ];

    const filteredContents = contentData.filter(item => item.tagId === tagId && item.storyCategoryId === storyCategoryId);
    const [contents, setContents] = useState(filteredContents);

    const categoryTitle = (storyCategoriesData.find(item=>item.id ===storyCategoryId) as any).title;
    return (
        <div className="container">
            <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">Story List ({categoryTitle})</MDBCardHeader>
                    <MDBCardBody>
                        {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                        <MDBCardText>
                        </MDBCardText>
                        <MDBListGroup className="my-4 mx-4" style={{}}>
                            {/* <MDBListGroupItem color="primary">Morbi leo risus</MDBListGroupItem>
                    <MDBListGroupItem color="info">Vestibulum at eros</MDBListGroupItem> */}
                            {contents.length ? contents.map((item, index) => {
                                return (
                                    <MDBListGroupItem
                                        key={index}
                                        color={index % 2 !== 0 ? "primary" : "info"}>
                                        <Link to={"/story/" + item.id}>{item.title}</Link>
                                    </MDBListGroupItem>
                                );
                            }) : <h1>Empty content</h1>}
                        </MDBListGroup>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
    );
}