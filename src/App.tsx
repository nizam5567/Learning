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
import Dashboard from "./Dashboard";
import Result from "./Result";
import Login from "./Login";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import Favorite from "./stories/Favorite";
import BottomLinks from "./common/BottomLinks";

function App() {

  return (
    <Router>
      <div className="App" style={{paddingBottom: "100px"}}>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header> */}
        
        <Switch>
          <Route exact path="/" component={TagList} />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute exact path="/storyCategory/:tagId" component={StoryCategoryList} />
          <PrivateRoute exact path="/content/:tagId/:storyCategoryId" component={ContentList} />
          <PrivateRoute path="/story/:id" component={StoryDetails} />
          <PrivateRoute path="/vocabulary/:storyId" component={Vocabulary} /> 
          <PrivateRoute path="/sentence/:storyId" component={Sentence} />                    
          <PrivateRoute path="/storyQuestions/:id" component={StoryQuestions} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/result" component={Result} />          
          <PrivateRoute path="/favorite" component={Favorite} />          
        </Switch>
        <BottomLinks />
      </div>
    </Router>
  );
}

export default App;
