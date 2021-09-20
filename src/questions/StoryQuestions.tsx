import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import { AnimateSharedLayout } from "framer-motion";
import QueAns from "./QueAns";
import CorrectAns from "./CorrectAns";
import Result from "../Result";

interface Question {
  id: number;
  title?: string;
  contentId?: number;
  type?: string;
  answers?: Answer[];
}

interface Answer {
  id: number;
  title: string;
  questionId: number;
  isCorrect: boolean;
}

interface ResultDetails {
  result: number;
  vocalbularyPoints?: number;
  sentencePoints?: number;
  suggestion?: string;
  suggestionLink?: string;
  suggestionLinkText?: string;
}

const StoryQuestions = (props: any) => {
  let storyId = 0;
  if (props.match.params.id) {
    storyId = parseInt(props.match.params.id);
  }

  const queList = [
    {
      id: 1, title: "Sample que 1?", contentId: 1, sequence: 1, isCompleted: false,
      type: "Vocabulary",
      answers: [
        { id: 1, title: "Ans 1", questionId: 1, isCorrect: false, sequence: 1 },
        { id: 2, title: "Ans 2", questionId: 1, isCorrect: false, sequence: 2 },
        { id: 3, title: "Ans 3", questionId: 1, isCorrect: true, sequence: 3 },
        { id: 4, title: "Ans 4", questionId: 1, isCorrect: false, sequence: 4 },
      ]
    },
    {
      id: 2, title: "Sample que 2?", contentId: 1, sequence: 2, isCompleted: false,
      type: "Vocabulary",
      answers: [
        { id: 5, title: "Ans 5", questionId: 1, isCorrect: false },
        { id: 6, title: "Ans 6", questionId: 1, isCorrect: true },
      ]
    },
    {
      id: 3, title: "Sample que 3?", contentId: 1, sequence: 3, isCompleted: false,
      type: "Sentence",
      answers: [
        { id: 7, title: "Ans 7", questionId: 1, isCorrect: false },
        { id: 8, title: "Ans 8", questionId: 1, isCorrect: true },
      ]
    },
    {
      id: 4, title: "Sample que 4?", contentId: 1, sequence: 4, isCompleted: false,
      type: "Sentence",
      answers: [
        { id: 9, title: "Ans 9", questionId: 1, isCorrect: true },
        { id: 10, title: "Ans 10", questionId: 1, isCorrect: false },
      ]
    },
    { id: 5, title: "Sample que 5?", contentId: 2, isCompleted: false, },
    { id: 6, title: "Sample que 6?", contentId: 2, isCompleted: false, }
  ];

  const totalQue = 4;
  const pointsForEachQue = 10;
  const totalPoints = totalQue * pointsForEachQue;

  let totalVocabularyPoints = queList.filter(item => item.type === "Vocabulary").length * pointsForEachQue;
  let totalSentencePoints = queList.filter(item => item.type === "Sentence").length * pointsForEachQue;

  const totalResultDetails: ResultDetails = {
    result: totalPoints,
    vocalbularyPoints: totalVocabularyPoints,
    sentencePoints: totalSentencePoints,
  };

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
    activeQueObj.type = queData.type;
  }
  let userResultDetails: ResultDetails = { result: 0, vocalbularyPoints: 0, sentencePoints: 0 };
  const [activeQueData, setActiveQueData] = useState(activeQueObj);
  const [result, setResult] = useState(0);
  const [resultDetails, setResultDetails] = useState<ResultDetails>(userResultDetails);
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
      // console.log("updatedResult", updatedResult);

      let userResultDetails: ResultDetails = resultDetails;

      userResultDetails.result = userResultDetails.result + pointsForEachQue;

      if (queObj.type === "Vocabulary") {
        userResultDetails.vocalbularyPoints = (userResultDetails.vocalbularyPoints || 0) + pointsForEachQue;
      } else if (queObj.type === "Sentence") {
        userResultDetails.sentencePoints = (userResultDetails.sentencePoints || 0) + pointsForEachQue;
      }

      setResultDetails(userResultDetails);
    }

    const currentQue: any = updatedQuestions.find((item) => {
      return item.isCompleted === false;
    });

    setGivenQueAnsObj({ queObj: queObj, isAnsCorrect: isAnsCorrect === "true" });
    setShowCorrectAnsScreen(true);

    setTimeout(() => {
      setShowCorrectAnsScreen(false);
    }, 2000);

    if (currentQue) {
      const que: Question = {
        id: currentQue.id,
        title: currentQue.title,
        contentId: currentQue.contentId,
        type: currentQue.type,
        answers: currentQue.answers
      };
      setActiveQueData(que);
    } else {
      let achievedPointsPercentage = (resultDetails.result * 100) / totalResultDetails.result;
      console.log("achievedPointsPercentage", achievedPointsPercentage);
      let achievedVocabularyPointsPercentage = ((resultDetails.vocalbularyPoints || 0) * 100) / (totalResultDetails.vocalbularyPoints || 0);
      let achievedSentencePointsPercentage = ((resultDetails.sentencePoints || 0) * 100) / (totalResultDetails.sentencePoints || 0);
      console.log("gg", achievedVocabularyPointsPercentage, achievedSentencePointsPercentage);
      let userResultDetails: ResultDetails = resultDetails;

      if (achievedPointsPercentage < 33) {
        console.log("story");
        userResultDetails.suggestion = "Read Story";
        userResultDetails.suggestionLink = "/story/" + storyId;
        userResultDetails.suggestionLinkText = "Read Story";
      } else if (achievedPointsPercentage >= 33 && achievedVocabularyPointsPercentage < 33){
        console.log("voca");
        userResultDetails.suggestion = "Read Vocabulary";
        userResultDetails.suggestionLink = "/vocabulary/" + storyId;
        userResultDetails.suggestionLinkText = "Learn Vocabulary";
      } else if (achievedPointsPercentage >= 33 && achievedSentencePointsPercentage < 33){
        console.log("sen");
        userResultDetails.suggestion = "Read Sentence";
        userResultDetails.suggestionLink = "/sentence/" + storyId;
        userResultDetails.suggestionLinkText = "Learn Sentence";
      } else {
        console.log("next");
      }

      setResultDetails(userResultDetails);
      setTimeout(() => {
        setIsCompleted(true);
      }, 2000);
    }
  }

  return (
    <div className="container" style={{ marginTop: "50px" }}>

      {!isCompleted ? (!showCorrectAnsScreen && <AnimateSharedLayout>
        <QueAns queObj={activeQueData}
          setQue={handleQueChange} />
      </AnimateSharedLayout>) : <Result result={result} resultDetails={resultDetails} totalPoints={totalPoints} />
        // <div>
        //   <h2>You have completed Part 1</h2>
        //   <h1>Result : {result} out of {totalPoints} Points</h1>
        // </div>
      }

      {showCorrectAnsScreen && <CorrectAns givenQueAnsObj={givenQueAnsObj} />}
    </div>
  );
}

export default StoryQuestions;