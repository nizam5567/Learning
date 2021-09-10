// import React, { useRef, useState, forwardRef } from "react";
// import { motion, AnimateSharedLayout } from "framer-motion";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./DragDropPattern1.css";


// export default function DragDropPattern1() {
//   const refContainer = useRef(null);

//   const ref0 = useRef(null);
//   const ref1 = useRef(null);
//   const ref2 = useRef(null);
//   const ref3 = useRef(null);
//   const ref4 = useRef(null);

//   const question = "Que ?";
//   const answers = ["ans 1", "ans 2", "ans 3", "ans 4"];
//   const cells = [ref0, ref1, ref2, ref3, ref4];
//   const correctAnswerIndex = 3;

//   const [activeIndex, setActiveIndex] = useState(2);
//   const [isDragging, setIsDragging] = useState(false);

//   const getActiveCellIndex = ({ point }) => {
//     const cellIndex = cells.findIndex((cell) => {
//       const {
//         offsetLeft,
//         offsetTop,
//         offsetWidth,
//         offsetHeight,
//         //parentElement
//       } = cell.current;
//       console.log(cell.current);
//       console.log(offsetLeft + ' ' + offsetTop + ' ' + offsetWidth + ' ' + offsetHeight + ' ');
//       const parentElement = refContainer.current;
//       console.log(parentElement);

//       const leftEdge = parentElement.offsetLeft + offsetLeft;
//       const rightEdge = parentElement.offsetLeft + offsetLeft + offsetWidth;
//       const topEdge = parentElement.offsetTop + offsetTop;
//       const bottomEdge = parentElement.offsetTop + offsetTop + offsetHeight;

//       console.log('-----');
//       console.log(parentElement.offsetLeft + ' ' + parentElement.offsetTop);
//       console.log(leftEdge + ' ' + rightEdge + ' ' + topEdge + ' ' + bottomEdge);
//       console.log(point.x + ' ' + point.y);

//       return (
//         point.x >= leftEdge &&
//         point.x <= rightEdge &&
//         point.y >= topEdge &&
//         point.y <= bottomEdge
//       );
//     });
//     console.log(cellIndex);
//     // cellIndex should be -1 if not dropped into a cell. If that's the case, just return the current activeIndex
//     if (cellIndex < 0) return activeIndex;
//     return cellIndex;
//   };

//   const dragStart = () => {
//     setIsDragging(true);
//   };

//   const dragEnd = (_, info) => {
//     setIsDragging(false);
//     const droppedIndex = getActiveCellIndex(info);
//     setActiveIndex(droppedIndex);
//     //setActiveIndex(getActiveCellIndex(info));
//     console.log(droppedIndex);
//     if (droppedIndex === correctAnswerIndex) {
//       //alert("Your answer is correct");
//     } else {
//       //alert("Your answer is wrong");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>{`Draggable Element - Current cell ${activeIndex + 1}`}</h1>
//       <div className="container">
//         {/* <div className="row">
//           <div className="col-4">
//             <div className="cell">

//             </div>
//           </div>
//           <div className="col-4 offset-4">
//             <div className="cell center">
//               col-sm-4
//             </div>
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           <div className="col-4 cell">col-sm-12</div>
//         </div>
//         <div className="row">
//           <div className="col-4">
//             <div className="cell">
//               gf
//             </div>
//           </div>
//           <div className="col-4 offset-4">
//             <div className="cell center">
//               col-sm-4
//             </div>
//           </div>
//         </div> */}
//       </div>
//       <div className="grid">
//         {/* {cells.map((cell, i) => (
//             <Cell
//               index={i}
//               key={`cell-${i}`}
//               activeIndex={activeIndex}
//               onDragStart={dragStart}
//               onDragEnd={dragEnd}
//               isDragging={isDragging}
//               ref={cell}
//             />
//           ))} */}
//       </div>
//       <AnimateSharedLayout>


//         <div className="container" ref={refContainer}>
//           <div className="row">
//             <div className="col-4">
//               <Cell
//                 index={0}
//                 key={`cell-${0}`}
//                 activeIndex={activeIndex}
//                 onDragStart={dragStart}
//                 onDragEnd={dragEnd}
//                 isDragging={isDragging}
//                 ref={ref0}
//               />
//             </div>
//             <div className="col-4 offset-4">
//               <Cell
//                 index={1}
//                 key={`cell-${1}`}
//                 activeIndex={activeIndex}
//                 onDragStart={dragStart}
//                 onDragEnd={dragEnd}
//                 isDragging={isDragging}
//                 ref={ref1}
//               />
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-4">
//               <Cell
//                 index={2}
//                 key={`cell-${2}`}
//                 activeIndex={activeIndex}
//                 onDragStart={dragStart}
//                 onDragEnd={dragEnd}
//                 isDragging={isDragging}
//                 ref={ref2}
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-4">
//               <Cell
//                 index={3}
//                 key={`cell-${3}`}
//                 activeIndex={activeIndex}
//                 onDragStart={dragStart}
//                 onDragEnd={dragEnd}
//                 isDragging={isDragging}
//                 ref={ref3}
//               />
//             </div>
//             <div className="col-4 offset-4">
//               <Cell
//                 index={4}
//                 key={`cell-${4}`}
//                 activeIndex={activeIndex}
//                 onDragStart={dragStart}
//                 onDragEnd={dragEnd}
//                 isDragging={isDragging}
//                 ref={ref4}
//               />
//             </div>
//           </div>
//         </div>

//       </AnimateSharedLayout>
//     </div>
//   );
// }

// const cellVariant = {
//   dragging: {
//     border: "2px dashed #008E95"
//   },
//   inactive: {
//     border: "2px solid #fff"
//   }
// };

// const draggableVariant = {
//   dragging: {
//     scale: .5
//   },
//   inactive: {
//     scale: 1
//   }
// };

// const fromAnimatePoint = [
//   { x: "-200px", y: "-200px" },
//   { x: "200px", y: "-200px" },
//   { x: "0px", y: "0px" },
//   { x: "-200px", y: "200px" },
//   { x: "200px", y: "200px" },
// ];

// export const Cell = forwardRef(
//   ({ index, activeIndex, onDragStart, onDragEnd, isDragging }, ref) => {
//     console.log("ref");
//     console.log(ref);
//     console.log(ref.current);
//     return (
//       <motion.div
//         className={"cell center "}
//         ref={ref}
//         id={index}
//         variants={cellVariant}
//         //animate={[isDragging ? "dragging" : "inactive"]}
//         initial={{ x: fromAnimatePoint[index].x, y: fromAnimatePoint[index].y, opacity: 0, scale: .5 }}
//         //animate={[isDragging ? "dragging" : "inactive",{x:'0', y: '0', opacity: 1, scale: 1}]}
//         animate={[isDragging ? "dragging" : "inactive", { x: '0px', y: '0px', opacity: 1, scale: 1 }]}
//         transition={{ duration: 1 }}
//         style={index === activeIndex ? { width: '100%', zIndex: 100 } : ''}
//       >
//         {`Cell ${index + 1}`}
//         {activeIndex === index && (
//           <motion.div
//             className="draggable center"
//             variants={draggableVariant}
//             animate={isDragging ? "dragging" : "inactive"}
//             dragElastic={1}
//             onDragStart={onDragStart}
//             onDragEnd={onDragEnd}
//             layoutId="drag"
//             drag
//           >
//             Draggable
//           </motion.div>
//         )}
//       </motion.div>
//     );
//   }
// );
