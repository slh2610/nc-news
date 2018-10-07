import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles';
import LoginBox from './components/LoginBox';
import Logout from './components/Logout';
import ArticleDisplay from './components/ArticleDisplay';
import NavBar from './components/NavBar';
import ArticleCreator from './components/ArticleCreator';
import axios from 'axios';

class App extends Component {
  state = {
    user: {},
    loggedInUser: ""
  }

  render() {
    return (
      < div className="App" >
        <h1>NC News</h1>
        {this.state.loggedInUser !== "" && <p>You are logged in as: {this.state.loggedInUser}</p>}
        <NavBar user={this.state.user} />
        <Route exact path="/articles" render={(props) => <Articles {...props} user={this.state.user} />} />
        <Route path="/logout" render={() => <Logout user={this.state.user} logout={this.logout} />} />
        <Route path="/login" render={() => <LoginBox getUser={this.getUser} />} />
        <Route path="/articles/:articleId" render={(props) => <ArticleDisplay {...props} user={this.state.user} />} />
        <Route path="/:topic/articles" render={(props) => <Articles {...props} user={this.state.user} />} />
        <Route path="/post-article" render={(props) => <ArticleCreator {...props} user={this.state.user} />} />
      </div >
    );
  }

  getUser = (user) => {
    axios.get(`https://sallysnc-news.herokuapp.com/api/users/${user}`)
      .then(({ data }) => {
        this.setState({
          user: data.user,
          loggedInUser: user
        })
      })
  }

  logout = () => {
    this.setState({
      user: {}
    })
  }
}

export default App;
