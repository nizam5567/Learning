import React, { useRef, useState, forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./StoryQuestions.css";
import { Button, Modal } from "react-bootstrap";

export default function QueAns(props: any) {
  //console.log('props.queObj', props.queObj);
  const refContainer = useRef(null);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const cells = [ref0, ref1, ref2, ref3, ref4];

  const queObj = props.queObj;

  const ansLength = queObj.answers.length;
  // console.log("length", ansLength);
  let rows = 0;
  let rowsColumns: any[] = [];
  let queIndex = 0;

  //column number for each rows
  if (ansLength === 2) {
    rowsColumns = [1, 2];
  } else if (ansLength === 3) {
    rowsColumns = [1, 2, 1];
  } else if (ansLength === 4) {
    rowsColumns = [2, 1, 2];
    queIndex = 2;
  }

  rows = rowsColumns.length;

  let elementIndex = 0;

  const [activeIndex, setActiveIndex] = useState(queIndex);
  const [isDragging, setIsDragging] = useState(false);

  const dialogsData = [
    { storyId: 1, content: "dialog 1", },
    { storyId: 1, content: "dialog 2", },
    { storyId: 1, content: "dialog 3", },
    { storyId: 1, content: "dialog 4", },
    { storyId: 1, content: "dialog 5", },
    { storyId: 1, content: "dialog 6", }
  ];

  useEffect(() => {
    setActiveIndex(queIndex);
  }, [props.queObj]);

  const getActiveCellIndex = ({ point }: any) => {
    const cellIndex = cells.findIndex((cell: any) => {
      if (cell.current === null)
        return false;

      const {
        offsetLeft,
        offsetTop,
        offsetWidth,
        offsetHeight,
        //parentElement
      } = cell.current;
      const parentElement: any = refContainer.current;

      const leftEdge = parentElement.offsetLeft + offsetLeft;
      const rightEdge = parentElement.offsetLeft + offsetLeft + offsetWidth;
      const topEdge = parentElement.offsetTop + offsetTop;
      const bottomEdge = parentElement.offsetTop + offsetTop + offsetHeight;

      return (
        point.x >= leftEdge &&
        point.x <= rightEdge &&
        point.y >= topEdge &&
        point.y <= bottomEdge
      );
    });

    if (cellIndex < 0) return activeIndex;
    return cellIndex;
  };

  const dragStart = () => {
    setIsDragging(true);
  };

  const dragEnd = (_: any, info: any) => {
    setIsDragging(false);
    const droppedIndex = getActiveCellIndex(info);
    setActiveIndex(droppedIndex);
    //console.log(droppedIndex);
    const activeCell = cells[droppedIndex];
    const isCorrect = (activeCell.current as any).dataset.iscorrect;
    //console.log(isCorrect);
    // if (isCorrect === 'true') {
    //   alert("correct");
    // } else {
    //   alert("wrong");
    // }

    setTimeout(() => {
      props.setQue(props.queObj, isCorrect);
    }, 500);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let answerIndex = 0;

  return (
    <div className="container" ref={refContainer}>

      {[...Array(rows)].map((e, i) => {
        let colNumber = 0;

        return (<div key={i} className={"row " + (rowsColumns[i] === 1 ? "justify-content-center" : "")}>
          {[...Array(rowsColumns[i])].map((cE, cIndex) => {
            colNumber++;

            return <div key={cIndex} className={(elementIndex !== queIndex ? "col-6" : "col-4")}>
              <Cell
                index={elementIndex}
                key={`cell-${elementIndex}`}
                activeIndex={activeIndex}
                queIndex={queIndex}
                onDragStart={dragStart}
                onDragEnd={dragEnd}
                isDragging={isDragging}
                isCorrect={queIndex !== elementIndex ? queObj.answers[answerIndex].isCorrect : false}
                //text={queIndex === elementIndex ? props.question : props.answers[answerIndex++]}
                text={queIndex === elementIndex ? queObj.title : queObj.answers[answerIndex++].title}
                ref={cells[elementIndex++]}
              />
            </div>;
          }
          )}
        </div>);
      })}


      <Button variant="primary" onClick={handleShow}
        style={{ marginTop: "20px" }}>
        Show Story
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {dialogsData.length > 0 && dialogsData.map((item, index) => {
              return (
                <div key={index} className={"row " + (index % 2 !== 0 ? "justify-content-end" : '')}>
                  <div className={"col-8 " + (index % 2 !== 0 ? "dialogRight dialogCotainer" : 'dialogCotainerReply')}>{item.content}</div>
                </div>);
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

    </div>
  );
}

const cellVariant = {
  dragging: {
    border: "2px dashed #008E95"
  },
  inactive: {
    border: "2px solid #fff"
  }
};

const draggableVariant = {
  dragging: {
    scale: .5
  },
  inactive: {
    scale: 1
  }
};

const fromAnimatePoint = [
  { x: "-200px", y: "-200px" },
  { x: "200px", y: "-200px" },
  { x: "0px", y: "0px" },
  { x: "-200px", y: "200px" },
  { x: "200px", y: "200px" },
];

export const Cell = forwardRef(
  ({ index, activeIndex, queIndex, onDragStart, onDragEnd, isDragging, isCorrect, text }: any, ref: any) => {
    return (
      <motion.div
        className={"cell center " + (index === queIndex ? "cellQue" : "")}
        ref={ref}
        id={index}
        variants={cellVariant}
        //animate={isDragging ? "dragging" : "inactive"}
        initial={{ x: fromAnimatePoint[index].x, y: fromAnimatePoint[index].y, opacity: 0, scale: .5 }}
        //animate={{ x: '0px', y: '0px', opacity: 1, scale: 1, border: isDragging ? "2px dashed #008E95" : "2px solid #fff" }}
        animate={{ x: '0px', y: '0px', opacity: 1, scale: 1, border: index !== queIndex ? isDragging ? "2px dashed #008E95" : "2px solid #fff" : "" }}
        transition={{ duration: 1 }}
        data-iscorrect={isCorrect}
        style={index === queIndex ? { width: '100%', zIndex: 100 } : {}}
      >
        {index !== queIndex && text}
        {activeIndex === index && (
          <motion.div
            className="draggable center"
            variants={draggableVariant}
            animate={isDragging ? "dragging" : "inactive"}
            dragElastic={1}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            layoutId="drag"
            drag
          >
            {text}
          </motion.div>
        )}
      </motion.div>
    );

  }
);