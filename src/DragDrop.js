import React, { useRef, useState, forwardRef } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import "./DragDrop.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/getting-started-with-framer-motion
 */
export default function DragDrop() {
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const cells = [ref0, ref1, ref2, ref3, ref4];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const getActiveCellIndex = ({ point }) => {
    const cellIndex = cells.findIndex((cell) => {
        console.log(cell.current);
      const {
        offsetLeft,
        offsetTop,
        offsetWidth,
        offsetHeight,
        parentElement
      } = cell.current;
      console.log(offsetLeft + ' ' + offsetTop + ' ' + offsetWidth + ' ' + offsetHeight + ' ');
      console.log(parentElement);

      const leftEdge = parentElement.offsetLeft + offsetLeft;
      const rightEdge = parentElement.offsetLeft + offsetLeft + offsetWidth;
      const topEdge = parentElement.offsetTop + offsetTop;
      const bottomEdge = parentElement.offsetTop + offsetTop + offsetHeight;
      console.log('-----');
      console.log(parentElement.offsetLeft + ' ' + parentElement.offsetTop);
      console.log(leftEdge + ' ' + rightEdge + ' ' + topEdge + ' ' + bottomEdge);

      console.log(point.x >= leftEdge &&
        point.x <= rightEdge &&
        point.y >= topEdge &&
        point.y <= bottomEdge);
      return (
        point.x >= leftEdge &&
        point.x <= rightEdge &&
        point.y >= topEdge &&
        point.y <= bottomEdge
      );
    });

    // cellIndex should be -1 if not dropped into a cell. If that's the case, just return the current activeIndex
    if (cellIndex < 0) return activeIndex;
console.log(cellIndex);
    return cellIndex;
  };

  const dragStart = () => {
    setIsDragging(true);
  };

  const dragEnd = (_, info) => {
    setIsDragging(false);
    setActiveIndex(getActiveCellIndex(info));
  };

  return (
    <div className="container">
      <h1>{`Draggable Element - Current cell ${activeIndex + 1}`}</h1>
      <AnimateSharedLayout>
          
        <div className="grid">
          {cells.map((cell, i) => (
            <Cell
              index={i}
              key={`cell-${i}`}
              activeIndex={activeIndex}
              onDragStart={dragStart}
              onDragEnd={dragEnd}
              isDragging={isDragging}
              ref={cell}
            />
          ))}
        </div>
      </AnimateSharedLayout>
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
    scale: .8
  },
  inactive: {
    scale: 1
  }
};

const fromAnimatePoint = [
    {x: "0", y: "0"},
    {x: "-200px", y: "-200px"},
    {x: "200px", y: "-200px"},
    {x: "-200px", y: "200px"},
    {x: "200px", y: "200px"},
];

export const Cell = forwardRef(
  ({ index, activeIndex, onDragStart, onDragEnd, isDragging }, ref) => {
    

      //const leftEdge = ref.parentElement.offsetLeft + ref.offsetLeft;
      //const rightEdge = parentElement.offsetLeft + offsetLeft + offsetWidth;
      //const topEdge = ref.parentElement.offsetTop + ref.offsetTop;
     // const bottomEdge = parentElement.offsetTop + offsetTop + offsetHeight;

    return (
      <motion.div
        className={"cell center " + (index === 0 ? 'cellone' : '')}
        ref={ref}
        id={index}
        variants={cellVariant}
        //animate={[isDragging ? "dragging" : "inactive"]}
        initial={{ x: fromAnimatePoint[index].x, y: fromAnimatePoint[index].y, opacity: 0, scale: .5 }}
        animate={[isDragging ? "dragging" : "inactive",{x:'0', y: '0', opacity: 1, scale: 1}]}
        transition={{duration: 1}}
        style={index === 0 ? {width: '100%'}: ''}
      >
        {`Cell ${index + 1}`}
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
            Draggable
          </motion.div>
        )}
      </motion.div>
    );
  }
);
