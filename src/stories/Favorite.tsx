// import React, { useState } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import BottomLinks from "../common/BottomLinks";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Favorite() {
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

  const favoriteItem = [
    { id: 1, contentId: 1, userId: 1 },
    { id: 2, contentId: 2, userId: 1 },
    { id: 3, contentId: 4, userId: 1 },
  ];

  const stories = storyCategoriesData.map((item: any) => {
    item.isFavorite = false;
    if (favoriteItem.find((favItem) => favItem.contentId === item.id)) {
      item.isFavorite = true;
    }
    return item;
  });

  const favoriteContent = stories.filter((item: any) => item.isFavorite)
  
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
        {/* <div className="row">
          <div className="col-md-12">
            <div className="userName">Favorite Story</div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-md-12" style={{ margin: "15px 0 10px" }}>
            <h2><strong>Favorite Story</strong></h2>
          </div>
        </div>
        <div className="row">

          {favoriteContent.length ? favoriteContent.map((item, index) => {
            return (
              <div className="col-4" key={index}>

                <div onClick={() => handleShow(item.id)}>
                  <div className={"tile " + item.tileColor}>
                    <div className="title">{item.title}</div>
                    <p className="countParticipation">{item.readCount} users learned</p>
                    <div className={"favoriteItem " + (item.isFavorite ? "favoriteItemActive" : "")}><FontAwesomeIcon icon={faHeart} /></div>
                  </div>
                </div>
              </div>
            );
          }) : <h1>Empty content</h1>}
        </div>

      </div>
      <BottomLinks />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Story Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div style={{ margin: "10px 0", fontWeight: "bold" }}>Number of user participation: 10</div>
          <div style={{ margin: "10px 0", fontWeight: "bold" }}>Reting: 4.5</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={routeChangeToStory}>
            Read Story
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );

}