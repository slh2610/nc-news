import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import ArticleCreator from './ArticleCreator';
import axios from 'axios';


class Articles extends Component {
  state = {
    articles: []
  }

  render() {
    if (!this.state.articles[0]) return <p>Loading....</p>
    return (
      < div>
        {this.state.articles.map(article => {
          return <div class="container">
            <p key={article._id} >
              <Link to={`/articles/${article._id}`} className="title">
                {article.title}
              </Link>
            </p>
            <p className="body">{article.body}></p>
            {article.created_by !== null ?
              <div>
                <p className="user">{article.created_by.username}</p>
                <p className="user"><img src={article.created_by.avatar_url} alt="user avatar"></img></p>
              </div>
              : <p className="user">No user info</p>
            }
          </div>
        })}
        {Array.isArray(this.props.user) ? <Route path="/post-article" render={(props) => <ArticleCreator {...props} user={this.state.user} />} />
          : <p>You must be logged in to add an article</p>}
      </div >
    )
  }

  componentDidMount() {
    this.getArticlesByTopic()
  }

  getArticles = () => {
    axios.get('https://sallysnc-news.herokuapp.com/api/articles')
      .then(({ data }) => {
        this.setState({
          articles: data.articles
        })
      })
  }

  getArticlesByTopic = () => {
    if (this.props.match.params.topic) {
      axios.get(`https://sallysnc-news.herokuapp.com/api/topics/${this.props.match.params.topic}/articles`)
        .then(({ data }) => {
          this.setState({
            articles: data.articles
          })
        })
    } else {
      this.getArticles()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.topic !== prevProps.match.params.topic) {
      this.getArticlesByTopic();
    }
  }

  addArticle = (article) => {
    this.setState({
      articles: [...this.state.articles, article]
    })
    axios.post(`https://sallysnc-news.herokuapp.com/api/topics/${this.props.match.params.topic}/articles`, article)
  }


}
export default Articles
