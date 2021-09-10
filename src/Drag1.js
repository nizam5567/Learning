import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
//import { findIndex, Position } from "./find-index";
//import move from "array-move";

export const Drag1 = () => {
    const [isDragging, setDragging] = useState(false);
    const ref = useRef(null);

    // By manually creating a reference to `dragOriginY` we can manipulate this value
    // if the user is dragging this DOM element while the drag gesture is active to
    // compensate for any movement as the items are re-positioned.
    const dragOriginY = useMotionValue(0);
    const dragOriginX = useMotionValue(0);
return(
    <motion.div className="" >
<motion.div
      ref={ref}
      initial={false}
      // If we're dragging, we want to set the zIndex of that item to be on top of the other items.
      animate={isDragging ? onTop : flat}
      style={{ background: 'black', height: '50px', width: '100px' }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.12 }}
      //drag="y"
      drag="x"
      //dragOriginY={dragOriginY}
      dragOriginX={dragOriginX}
      //dragConstraints={{ top: 0, bottom: 0 }}
      dragConstraints={{ left: 0, right: 500 }}
      dragElastic={1}
      onDragStart={() => setDragging(true)}
      //onDragEnd={() => setDragging(false)}
      onDragEnd={(pos) => {setDragging(false); console.log(pos);}}
      //onDrag={(e, { point }) => moveItem(i, point.y)}
      positionTransition={({ delta }) => {
        if (isDragging) {
          // If we're dragging, we want to "undo" the items movement within the list
          // by manipulating its dragOriginY. This will keep the item under the cursor,
          // even though it's jumping around the DOM.
          //dragOriginY.set(dragOriginY.get() + delta.y);
          dragOriginX.set(dragOriginX.get() + delta.x);
        }

        // If `positionTransition` is a function and returns `false`, it's telling
        // Motion not to animate from its old position into its new one. If we're
        // dragging, we don't want any animation to occur.
        return !isDragging;
      }}
    />

</motion.div>
);
};

// Spring configs
const onTop = { zIndex: 1 };
const flat = {
  zIndex: 0,
  transition: { delay: 0.3 }
};

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];
const heights = {
  "#FF008C": 60,
  "#D309E1": 80,
  "#9C1AFF": 40,
  "#7700FF": 100
};