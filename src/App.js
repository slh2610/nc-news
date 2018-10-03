import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles';
import TopicSelector from './components/TopicSelector';
import LoginBox from './components/LoginBox';
import CreateUserBox from './components/CreateUserBox';
import ArticleDisplay from './components/ArticleDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NC News</h1>
        <nav>
          <Link to="/articles">Home</Link>
          {" | "}
          <Link to="/coding/articles">Coding</Link>
          {" | "}
          <Link to="/cooking/articles">Cooking</Link>
          {" | "}
          <Link to="/football/articles">Football</Link>
          {" | "}
          <Link to="/create-user">Sign Up</Link>
          {" | "}
          <Link to="/login">Login</Link>
        </nav>

        <Route exact path="/articles" render={() => <Articles />} />
        <Route path="/create-user" render={() => <CreateUserBox />} />
        <Route path="/login" render={() => <LoginBox />} />
        <Route path="/articles/:articleId" component={ArticleDisplay} />
        <Route path="/coding/articles" component={Articles} />
      </div>
    );
  }
}

export default App;
