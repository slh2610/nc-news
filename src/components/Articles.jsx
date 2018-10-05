import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ArticleCreator from './ArticleCreator';
import axios from 'axios';


class Articles extends Component {
  state = {
    articles: []
  }

  render() {
    // if (!this.state.articles.title) return <p>Loading....</p>
    return (
      < div >
        {this.state.articles.map(article => {
          return <p key={article._id}>
            <Link to={`/articles/${article._id}`}>
              {article.title}
            </Link>
          </p>
        })}
        {Array.isArray(this.props.user) ? <ArticleCreator addArticle={this.addArticle} />
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
