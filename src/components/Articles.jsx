import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Articles extends Component {
  state = {
    articles: []
  }

  render() {
    return (
      <div>
        {this.state.articles.map(article => {
          return <p key={article._id}>
            <Link to={`/articles/${article._id}`}>
              {article.title}
            </Link>

          </p>
        })}
      </div>
    )
  }

  componentDidMount() {
    this.getArticles()
  }

  getArticles = () => {
    axios.get('https://sallysnc-news.herokuapp.com/api/articles')
      .then(({ data }) => {
        this.setState({
          articles: data.articles
        })
      })
  }

}

export default Articles
