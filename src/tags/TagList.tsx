// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";
import './TagList.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import BottomLinks from "../common/BottomLinks";
import { Modal, Button } from "react-bootstrap";
import CorrectAns from "../questions/CorrectAns";
import { useHistory } from "react-router-dom";

export default function TagList() {
  const tagData = [
    { id: 1, title: "Story", },
    { id: 2, title: "Lesson", },
  ];

  const storyCategoriesData = [
    { id: 1, title: "Upwork", readCount: 15, tileColor: "purple" },
    { id: 2, title: "Software Company", readCount: 20, tileColor: "red" },
    { id: 3, title: "Digital Agency", readCount: 10, tileColor: "orange" },
    { id: 4, title: "Sample Story", readCount: 12, tileColor: "green" },
    { id: 5, title: "Sample Story", readCount: 5, tileColor: "blue" },
    { id: 6, title: "Sample Story", readCount: 15, tileColor: "purple" },
  ];

  // const [tags, setTags] = useState(tagData);
  const [contentId, setContentId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = (contentId: number) => {
    setContentId(contentId);
    setShowModal(true);
  };

  const history = useHistory();
  const routeChangeToStory = () => {
    let path = "/story/" + contentId;
    history.push(path);
  }

  return (
    <div className="container">

      <div className="container bootstrap snippets bootdey appStoryContent">
        <div className="row">
          <div className="col-md-12">
            <div className="userName">Hello John Doe</div>
            <div className="tagLine">What do you want to learn?</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2><strong>Story</strong></h2>
          </div>
        </div>
        <div className="row">
          {/* <div class="col-sm-4">
            <div class="tile purple">
              <h3 class="title">Purple Tile</h3>
              <p>Hello Purple, this is a colored tile.</p>
            </div>
          </div> */}
          {storyCategoriesData.length ? storyCategoriesData.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                {/* <Link to={"/story/" + item.id}>
                  <div className={"tile " + item.tileColor}>
                    <div className="title">{item.title}</div>
                    <p className="countParticipation">{item.readCount} users learned</p>
                  </div>
                </Link> */}

                <div onClick={() => handleShow(item.id)}>
                  <div className={"tile " + item.tileColor}>
                    <div className="title">{item.title}</div>
                    <p className="countParticipation">{item.readCount} users learned</p>
                  </div>
                </div>
              </div>
            );
          }) : <h1>Empty content</h1>}
        </div>

        {/* {storyCategoriesData.length > 0 && storyCategoriesData.map((item, index) => {
          let element = <div className="col-4" key={index}>
            <Link to={"/content/1/" + item.id}>
              <div className={"tile " + item.tileColor}>
                <div className="title">{item.title}</div>
                <p className="countParticipation">{item.readCount} users learned</p>
              </div>
            </Link>
          </div>
          let tileElement = index % 3 === 0 ? <div className="row">{element}</div> : element;

          return (
            <>
              {tileElement}
            </>
          );
        })
        } */}
        <div className="row">
          <div className="col-md-12">
            <h2><strong>Lesson</strong></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="tile purple">
              <h3 className="title">Tense Learning</h3>
              <p className="countParticipation">20 users learned</p>
            </div>
          </div>
          <div className="col-4">
            <div className="tile red">
              <h3 className="title">Sentence Learning</h3>
              <p className="countParticipation">12 users learned</p>
            </div>
          </div>
          <div className="col-4">
            <div className="tile orange">
              <h3 className="title">Paragraph</h3>
              <p className="countParticipation">6 users learned</p>
            </div>
          </div>
        </div>
      </div>
      <BottomLinks />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Story Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Modal.Body>
        <Modal.Footer>          
          <Button variant="secondary" onClick={routeChangeToStory}>
            Start Story
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <MDBContainer>
        <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
          <MDBCardHeader color="primary-color deep-orange lighten-1">Study Types</MDBCardHeader>
          <MDBCardBody>

            <MDBCardText>
              <MDBListGroup className="my-4 mx-4" style={{}}>

                {tagData.length && tagData.map((item, index) => {
                  return (
                    <MDBListGroupItem
                      key={index}
                      color={index % 2 !== 0 ? "primary" : "info"}>
                      <Link to={"/storyCategory/" + item.id}>{item.title}</Link>
                    </MDBListGroupItem>
                  );
                })}
                <div style={{ marginTop: "20px" }}>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </div>
              </MDBListGroup>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer> */}
    </div>
  );

}