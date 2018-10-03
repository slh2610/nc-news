import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles';
import LoginBox from './components/LoginBox';
import CreateUserBox from './components/CreateUserBox';
import ArticleDisplay from './components/ArticleDisplay';
import NavBar from './components/NavBar';
import ArticleCreator from './components/ArticleCreator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NC News</h1>
        <NavBar />
        <Route exact path="/articles" component={Articles} />
        <Route path="/create-user" render={() => <CreateUserBox />} />
        <Route path="/login" render={() => <LoginBox />} />
        <Route path="/articles/:articleId" component={ArticleDisplay} />
        <Route path="/coding/articles" component={Articles} />
        <Route path="/cooking/articles" component={Articles} />
        <Route path="/football/articles" component={Articles} />
        <Route path="/article/post-article" component={ArticleCreator} />
      </div>
    );
  }
}

export default App;
