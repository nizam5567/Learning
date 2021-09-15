import React, { useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBCard, MDBCardBody, MDBCardHeader, MDBCardText } from "mdbreact";
import { Link } from "react-router-dom";


export default function StoryCategoryList(props: any) {
    let tagId = 0;
    if (props.match.params.tagId) {
        tagId = parseInt(props.match.params.tagId);
    }

    const storyCategoriesData = [
        { id: 1, title: "Upwork", },
        { id: 2, title: "Software Company", },
        { id: 3, title: "Digital Agency", },
    ];

    const [categories, setCategories] = useState(storyCategoriesData);

    return (
        <div className="container">
            <MDBContainer>
                <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color deep-orange lighten-1">Story Categories</MDBCardHeader>
                    <MDBCardBody>
                        {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                        <MDBCardText>
                            <MDBListGroup className="my-4 mx-4" style={{}}>
                                {categories.length ? categories.map((item, index) => {
                                    return (
                                        <MDBListGroupItem
                                            key={index}
                                            color={index % 2 !== 0 ? "primary" : "info"}>
                                            <Link to={"/content/" + tagId + "/" + item.id}>{item.title}</Link>
                                        </MDBListGroupItem>
                                    );
                                }) : <h1>Empty content</h1>}
                            </MDBListGroup>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}