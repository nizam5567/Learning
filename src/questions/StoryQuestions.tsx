import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import { AnimateSharedLayout } from "framer-motion";
import QueAns from "./QueAns";
import CorrectAns from "./CorrectAns";

interface Question {
  id: number,
  title?: string,
  contentId?: number,
  answers?: Answer[]
}

interface Answer {
  id: number,
  title: string,
  questionId: number,
  isCorrect: boolean
}

const StoryQuestions = (props: any) => {
  let storyId = 0;
  if (props.match.params.id) {
    storyId = parseInt(props.match.params.id);
  }

  const queList = [
    {
      id: 1, title: "Sample que 1?", contentId: 1, sequence: 1, isCompleted: false,
      answers: [
        { id: 1, title: "Ans 1", questionId: 1, isCorrect: false, sequence: 1 },
        { id: 2, title: "Ans 2", questionId: 1, isCorrect: false, sequence: 2 },
        { id: 3, title: "Ans 3", questionId: 1, isCorrect: true, sequence: 3 },
        { id: 4, title: "Ans 4", questionId: 1, isCorrect: false, sequence: 4 },
      ]
    },
    {
      id: 2, title: "Sample que 2?", contentId: 1, sequence: 2, isCompleted: false,
      answers: [
        { id: 5, title: "Ans 5", questionId: 1, isCorrect: false },
        { id: 6, title: "Ans 6", questionId: 1, isCorrect: true },
      ]
    },
    {
      id: 3, title: "Sample que 3?", contentId: 1, sequence: 3, isCompleted: false,
      answers: [
        { id: 7, title: "Ans 7", questionId: 1, isCorrect: false },
        { id: 8, title: "Ans 8", questionId: 1, isCorrect: true },
      ]
    },
    { id: 4, title: "Sample que 4?", contentId: 2, isCompleted: false, },
    { id: 5, title: "Sample que 5?", contentId: 2, isCompleted: false, }
  ];

  const totalQue = 3;
  const pointsForEachQue = 10;
  const totalPoints = totalQue * pointsForEachQue;

  const selectedStoryQuestions = queList.filter((item) => {
    return item.contentId === storyId;
  });

  let activeQueObj: Question = {
    id: 0,
  };

  if (selectedStoryQuestions.length) {
    const queData = selectedStoryQuestions[0];
    activeQueObj.id = queData.id;
    activeQueObj.title = queData.title;
    activeQueObj.contentId = queData.contentId;
    activeQueObj.answers = queData.answers;
  }

  const [activeQueData, setActiveQueData] = useState(activeQueObj);
  const [result, setResult] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [storyQuestions, setStoryQuestions] = useState(selectedStoryQuestions);
  const [showCorrectAnsScreen, setShowCorrectAnsScreen] = useState(false);
  const [givenQueAnsObj, setGivenQueAnsObj] = useState({});

  const handleQueChange = (queObj: any, isAnsCorrect: string) => {
    const updatedQuestions = storyQuestions.map((item) => item.id === queObj.id ? { ...item, isCompleted: true } : item)
    setStoryQuestions(updatedQuestions);

    if (isAnsCorrect === "true") {
      let updatedResult = result + pointsForEachQue;
      setResult(updatedResult);
      console.log("updatedResult", updatedResult);
    }

    const currentQue: any = updatedQuestions.find((item) => {
      return item.isCompleted === false;
    });

    setGivenQueAnsObj({ queObj: queObj, isAnsCorrect: isAnsCorrect === "true" });
    setShowCorrectAnsScreen(true);

    setTimeout(() => {
      setShowCorrectAnsScreen(false);
    }, 1500);

    if (currentQue) {
      const que: Question = {
        id: currentQue.id,
        title: currentQue.title,
        contentId: currentQue.contentId,
        answers: currentQue.answers
      };
      setActiveQueData(que);
    } else {
      setTimeout(() => {
        setIsCompleted(true);
      }, 1500);
    }
  }

  return (
    <div className="container" style={{ marginTop: "50px" }}>

      {!isCompleted ? (!showCorrectAnsScreen && <AnimateSharedLayout>
        <QueAns queObj={activeQueData}
          setQue={handleQueChange} />
      </AnimateSharedLayout>) : <div>
        <h2>You have completed Part 1</h2>
        <h1>Result : {result} out of {totalPoints} Points</h1>
      </div>}

      {showCorrectAnsScreen && <CorrectAns givenQueAnsObj={givenQueAnsObj} />}
    </div>
  );
}

export default StoryQuestions;