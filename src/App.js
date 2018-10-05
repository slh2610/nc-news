import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles';
import LoginBox from './components/LoginBox';
import CreateUserBox from './components/CreateUserBox';
import ArticleDisplay from './components/ArticleDisplay';
import NavBar from './components/NavBar';
import ArticleCreator from './components/ArticleCreator';
import axios from 'axios';

class App extends Component {
  state = {
    user: {}
  }

  render() {
    return (
      <div className="App">
        <h1>NC News</h1>
        <NavBar />
        <Route exact path="/articles" render={(props) => <Articles {...props} user={this.state.user} />} />
        <Route path="/create-user" render={(props) => <CreateUserBox {...props} />} />
        <Route path="/login" render={() => <LoginBox getUser={this.getUser} />} />
        <Route path="/articles/:articleId" component={ArticleDisplay} />
        <Route path="/:topic/articles" component={Articles} />
        <Route exact path="/post-article" render={(props) => <ArticleCreator {...props} user={this.state.user} />} />
      </div>
    );
  }

  getUser = (user) => {
    axios.get(`https://sallysnc-news.herokuapp.com/api/users/${user}`)
      .then(({ data }) => {
        this.setState({
          user: data.user
        })
      })
  }
}

export default App;
