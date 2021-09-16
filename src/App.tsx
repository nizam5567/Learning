import * as React from "react";
// import ReactDOM from 'react-dom';
// import React, { useEffect, useState } from "react";
import './App.css';
import StoryQuestions from "./questions/StoryQuestions";
import ContentList from "./contents/ContentList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TagList from "./tags/TagList";
import StoryCategoryList from "./stories/StoryCategoryList";
import StoryDetails from "./stories/StoryDetails";
import Vocabulary from "./stories/Vocabulary";
import Sentence from "./stories/Sentence";

function App() {

  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header> */}
        {/* <StoryList />
        <DragDropPattern1 /> */}

        <Switch>
          <Route exact path="/" component={TagList} />
          <Route exact path="/storyCategory/:tagId" component={StoryCategoryList} />
          <Route exact path="/content/:tagId/:storyCategoryId" component={ContentList} />
          <Route path="/story/:id" component={StoryDetails} />
          <Route path="/vocabulary/:storyId" component={Vocabulary} /> 
          <Route path="/sentence/:storyId" component={Sentence} />                    
          <Route path="/storyQuestions/:id" component={StoryQuestions} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
